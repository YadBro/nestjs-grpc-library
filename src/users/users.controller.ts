import {
  Body,
  Controller,
  Inject,
  OnModuleInit,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { userServiceClient } from './protoInterface/userPackage/userService';
import { UsersService } from './users.service';
import { ClientGrpc, GrpcStreamCall } from '@nestjs/microservices';
import { ReplaySubject } from 'rxjs';
import { ServerReadableStream, sendUnaryData } from '@grpc/grpc-js';
import { CreateUserRequest__Output } from './protoInterface/userPackage/CreateUserRequest';
import { CreateUserResponse } from './protoInterface/userPackage/CreateUserResponse';
import { UserAuthMiddleware } from 'src/user-auth/user-auth.middleware';
import { BookFilterExceptionFilter } from 'src/books/book-filter-exception/book-filter-exception.filter';

@Controller('users')
@UseFilters(BookFilterExceptionFilter)
@UseGuards(UserAuthMiddleware)
export class UsersController implements OnModuleInit {
  private userServiceClient: userServiceClient;

  constructor(
    private users: UsersService,
    @Inject('userPackage') private readonly client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.userServiceClient =
      this.client.getService<userServiceClient>('userService');
  }

  @Post('create')
  addUser(@Body() user: CreateUserDto) {
    const rs = new ReplaySubject();
    rs.next(user);
    rs.complete();
    return this.userServiceClient.createUser(rs);
  }

  @GrpcStreamCall('userService')
  createUser(
    stream: ServerReadableStream<CreateUserRequest__Output, CreateUserResponse>,
    callback: sendUnaryData<CreateUserResponse>,
  ) {
    let data: CreateUserResponse;
    let bookData: CreateUserDto;
    stream.on('data', (chunk: CreateUserDto) => {
      bookData = chunk;
    });

    stream.on('end', async () => {
      data = await this.users.createUser(bookData);
      callback(null, data);
      // data = this.users.createUser(bookData);
      // callback(null, { id: 1, token: 'abcd' });
    });
  }
}
