import { Injectable, Logger } from '@nestjs/common';
import { BookResponse } from './protoInterface/bookPackage/BookResponse';
import { AddBookRequest } from './protoInterface/bookPackage/AddBookRequest';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dtos/create-book.dto';
import { GetAllBookRequest } from './protoInterface/bookPackage/GetAllBookRequest';
import { FindOneBookRequest } from './protoInterface/bookPackage/FindOneBookRequest';
import { UpdateBookRequest } from './protoInterface/bookPackage/UpdateBookRequest';
import { UpdateBookResponse } from './protoInterface/bookPackage/UpdateBookResponse';
import { DeleteBookRequest } from './protoInterface/bookPackage/DeleteBookRequest';
import { DeleteBookResponse } from './protoInterface/bookPackage/DeleteBookResponse';

const logger = new Logger();

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  public findOneBook(data: FindOneBookRequest): Promise<BookResponse> {
    const book = this.prisma.book.findFirst({
      where: { AND: { id: data.id, userId: data.userId } },
      include: { user: true },
    });
    return book;
  }

  public findManyBook(ids: number[]): Promise<BookResponse[]> {
    const book = this.prisma.book.findMany({
      where: { id: { in: ids } },
      include: { user: true },
    });
    return book;
  }

  public getAllBook(data: GetAllBookRequest): Promise<Array<BookResponse>> {
    const booksLimit = this.prisma.book.findMany({
      include: {
        user: true,
      },
      take: data.limit,
      where: {
        userId: data.userId,
      },
    });
    return booksLimit;
  }

  public async addBook(book: CreateBookDto): Promise<BookResponse> {
    const checkBook = await this.prisma.book.findFirst({
      where: { name: book.name },
    });

    if (checkBook) {
      return {
        name: book.name + ' <= The name book is already exist',
      };
    }

    const newBook = this.prisma.book.create({
      data: {
        name: book.name,
        userId: book.userId,
      },
    });
    logger.log('Success to add new book');

    return newBook;
  }

  public async updateBook(
    book: Partial<UpdateBookRequest>,
  ): Promise<UpdateBookResponse> {
    const checkBook = await this.prisma.book.findFirst({
      where: {
        AND: {
          id: book.id,
          userId: book.userId,
        },
      },
    });

    if (!checkBook?.name) {
      book.name = book.id + ' <= The book id is not found.';
      return book;
    }

    await this.prisma.book.updateMany({
      data: { name: book.name },
      where: { AND: { userId: book.userId, id: book.id } },
    });

    return book;
  }

  public async deleteBook(
    data: DeleteBookRequest,
  ): Promise<DeleteBookResponse> {
    const { id, userId } = data;

    const book = await this.prisma.book.findFirst({
      where: { AND: { id, userId } },
    });

    if (book === null) {
      return { status: false };
    }

    await this.prisma.book.deleteMany({
      where: { AND: { id, userId } },
    });

    return { status: true };
  }
}
