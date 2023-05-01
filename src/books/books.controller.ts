import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  OnModuleInit,
  Param,
  ParseArrayPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookServiceClient } from './protoInterface/bookPackage/BookService';
import {
  ClientGrpc,
  GrpcMethod,
  GrpcStreamCall,
  GrpcStreamMethod,
} from '@nestjs/microservices';
import { BookFilterExceptionFilter } from './book-filter-exception/book-filter-exception.filter';
import { Request, Response } from 'express';
import { BookResponse } from './protoInterface/bookPackage/BookResponse';
import {
  AddBookRequest,
  AddBookRequest__Output,
} from './protoInterface/bookPackage/AddBookRequest';
import { Observable, ReplaySubject, Subject, toArray } from 'rxjs';
import { ServerReadableStream, sendUnaryData } from '@grpc/grpc-js';
import { GetAllBookRequest } from './protoInterface/bookPackage/GetAllBookRequest';
import { GetAllBookResponse } from './protoInterface/bookPackage/GetAllBookResponse';
import { CreateBookDto } from './dtos/create-book.dto';
import { UserAuthMiddleware } from 'src/user-auth/user-auth.middleware';
import { FindOneBookRequest } from './protoInterface/bookPackage/FindOneBookRequest';
import { UpdateBookRequest } from './protoInterface/bookPackage/UpdateBookRequest';
import { UpdateBookResponse } from './protoInterface/bookPackage/UpdateBookResponse';
import { DeleteBookRequest } from './protoInterface/bookPackage/DeleteBookRequest';
import { DeleteBookResponse } from './protoInterface/bookPackage/DeleteBookResponse';
import { FindManyBookRequest } from './protoInterface/bookPackage/FindManyBookRequest';
import { FindOneBookResponse } from './protoInterface/bookPackage/FindOneBookResponse';

@Controller('books')
@UseFilters(BookFilterExceptionFilter)
export class BooksController implements OnModuleInit {
  private bookServiceClient: BookServiceClient;

  constructor(
    private books: BooksService,
    @Inject('bookPackage') private readonly client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.bookServiceClient =
      this.client.getService<BookServiceClient>('BookService');
  }

  @Get('')
  getBooks(@Req() request: Request, @Query() query: { limit?: number }) {
    const userId = request.body.userId;
    const { limit = 1 } = query;
    return this.bookServiceClient.getAllBook({ limit, userId });
  }

  @Get(':id')
  getBookById(
    @Req() request: Request,
    @Param('id', ParseIntPipe) id: number,
    @Res() response: Response,
  ) {
    const userId = request.body.userId;
    return this.bookServiceClient.findOneBook({ id, userId }, (err, val) => {
      if (err) {
        console.error(err);
        response.status(500).send(err);
        return;
      }

      response.status(200).send(val);
    });
  }

  @Post('create')
  createBook(@Body() book: AddBookRequest) {
    const rs = new ReplaySubject();
    rs.next(book);
    rs.complete();

    return this.bookServiceClient.addBook(rs);
  }

  @Patch('edit/:id')
  editBook(@Req() request: Request, @Param('id', ParseIntPipe) id: number) {
    const book: UpdateBookRequest = request.body;
    book.id = id;
    book.userId = request.body.userId;
    const rs = new ReplaySubject();
    rs.next(book);
    rs.complete();

    return this.bookServiceClient.updateBook(rs);
  }

  @Delete('delete/:id')
  delete(@Req() request: Request, @Param('id', ParseIntPipe) id: number) {
    const userId = request.body.userId;
    return this.bookServiceClient.deleteBook({ id, userId });
  }

  @Post('ids')
  findByIds(
    @Body('ids', ParseArrayPipe) ids: [{ id: number }],
  ): Observable<BookResponse[]> {
    const rs = new ReplaySubject<FindManyBookRequest>();
    ids.forEach((el) => {
      rs.next({ ids: [el.id] });
    });
    rs.complete();

    const stream = this.bookServiceClient.findManyBook(rs.asObservable());
    // return stream.pipe(toArray());
    return stream.pipe(toArray());
  }

  @GrpcMethod('BookService')
  async findOneBook(data: FindOneBookRequest): Promise<{ book: BookResponse }> {
    const book = await this.books.findOneBook(data);
    return { book };
  }

  @GrpcStreamCall('BookService')
  addBook(
    stream: ServerReadableStream<AddBookRequest__Output, BookResponse>,
    callback: sendUnaryData<{ book: BookResponse }>,
  ) {
    let data: BookResponse;
    let bookData: CreateBookDto;
    stream.on('data', (chunk: CreateBookDto) => {
      bookData = chunk;
    });

    stream.on('end', async () => {
      data = await this.books.addBook(bookData);
      callback(null, { book: data });
      // callback(null, { book: { id: 1, name: 'Ipa' } });
    });
  }

  @GrpcStreamCall('BookService')
  updateBook(
    stream: ServerReadableStream<AddBookRequest__Output, UpdateBookResponse>,
    callback: sendUnaryData<UpdateBookResponse>,
  ) {
    let data: UpdateBookResponse;
    let bookData: CreateBookDto;
    stream.on('data', (chunk: CreateBookDto) => {
      bookData = chunk;
    });

    stream.on('end', async () => {
      // console.log(bookData);
      data = await this.books.updateBook(bookData);
      // callback(null, data);
      callback(null, { name: bookData.name });
    });
  }

  @GrpcMethod('BookService')
  async getAllBook(data: GetAllBookRequest): Promise<GetAllBookResponse> {
    const books = await this.books.getAllBook(data);
    return { books };
  }

  @GrpcMethod('BookService')
  async deleteBook(data: DeleteBookRequest): Promise<DeleteBookResponse> {
    const deleteStatus = await this.books.deleteBook(data);
    return deleteStatus;
  }

  @GrpcStreamMethod('BookService')
  async findManyBook(data$: Observable<FindManyBookRequest>) {
    const book = new Subject();
    //   async (data: FindManyBookRequest) => {
    //     const bookById = await this.books.findManyBook(data.ids[0]);
    //     book.next(bookById);
    //   },
    //   null,
    //   () => {
    //     book.complete();
    //   },
    // );

    const ids = [];

    const onNext = (bookData: FindManyBookRequest) => {
      ids.push(bookData.ids[0]);
    };

    const onComplete = async () => {
      const bookById = await this.books.findManyBook(ids);
      bookById.map((el) => {
        book.next(el);
      });

      book.complete();
    };
    data$.subscribe({
      next: onNext,
      complete: onComplete,
    });

    return book.asObservable();
  }
}
