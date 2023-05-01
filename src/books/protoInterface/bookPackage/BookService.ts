// Original file: node_modules/grpc-nest-proto/protos/book.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  AddBookRequest,
  AddBookRequest as _bookPackage_AddBookRequest,
  AddBookRequest__Output as _bookPackage_AddBookRequest__Output,
} from '../bookPackage/AddBookRequest';
import type {
  AddBookResponse as _bookPackage_AddBookResponse,
  AddBookResponse__Output as _bookPackage_AddBookResponse__Output,
} from '../bookPackage/AddBookResponse';
import type {
  BookResponse,
  BookResponse as _bookPackage_BookResponse,
  BookResponse__Output as _bookPackage_BookResponse__Output,
} from '../bookPackage/BookResponse';
import type {
  DeleteBookRequest as _bookPackage_DeleteBookRequest,
  DeleteBookRequest__Output as _bookPackage_DeleteBookRequest__Output,
} from '../bookPackage/DeleteBookRequest';
import type {
  DeleteBookResponse as _bookPackage_DeleteBookResponse,
  DeleteBookResponse__Output as _bookPackage_DeleteBookResponse__Output,
} from '../bookPackage/DeleteBookResponse';
import type {
  FindManyBookRequest,
  FindManyBookRequest as _bookPackage_FindManyBookRequest,
  FindManyBookRequest__Output as _bookPackage_FindManyBookRequest__Output,
} from '../bookPackage/FindManyBookRequest';
import type {
  FindOneBookRequest as _bookPackage_FindOneBookRequest,
  FindOneBookRequest__Output as _bookPackage_FindOneBookRequest__Output,
} from '../bookPackage/FindOneBookRequest';
import type {
  FindOneBookResponse as _bookPackage_FindOneBookResponse,
  FindOneBookResponse__Output as _bookPackage_FindOneBookResponse__Output,
} from '../bookPackage/FindOneBookResponse';
import type {
  GetAllBookRequest as _bookPackage_GetAllBookRequest,
  GetAllBookRequest__Output as _bookPackage_GetAllBookRequest__Output,
} from '../bookPackage/GetAllBookRequest';
import type {
  GetAllBookResponse as _bookPackage_GetAllBookResponse,
  GetAllBookResponse__Output as _bookPackage_GetAllBookResponse__Output,
} from '../bookPackage/GetAllBookResponse';
import type {
  UpdateBookRequest as _bookPackage_UpdateBookRequest,
  UpdateBookRequest__Output as _bookPackage_UpdateBookRequest__Output,
} from '../bookPackage/UpdateBookRequest';
import type {
  UpdateBookResponse as _bookPackage_UpdateBookResponse,
  UpdateBookResponse__Output as _bookPackage_UpdateBookResponse__Output,
} from '../bookPackage/UpdateBookResponse';
import { Observable } from 'rxjs';

export interface BookServiceClient extends grpc.Client {
  AddBook(
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_AddBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_AddBookRequest>;
  AddBook(
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_bookPackage_AddBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_AddBookRequest>;
  AddBook(
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_AddBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_AddBookRequest>;
  AddBook(
    callback: grpc.requestCallback<_bookPackage_AddBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_AddBookRequest>;
  addBook(
    book: Observable<AddBookRequest>,
  ): grpc.ClientWritableStream<_bookPackage_AddBookRequest>;
  addBook(
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_AddBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_AddBookRequest>;
  addBook(
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_bookPackage_AddBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_AddBookRequest>;
  addBook(
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_AddBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_AddBookRequest>;
  addBook(
    callback: grpc.requestCallback<_bookPackage_AddBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_AddBookRequest>;

  DeleteBook(
    argument: _bookPackage_DeleteBookRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_bookPackage_DeleteBookResponse__Output>;
  DeleteBook(
    argument: _bookPackage_DeleteBookRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_bookPackage_DeleteBookResponse__Output>;
  deleteBook(
    argument: _bookPackage_DeleteBookRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_bookPackage_DeleteBookResponse__Output>;
  deleteBook(
    argument: _bookPackage_DeleteBookRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_bookPackage_DeleteBookResponse__Output>;

  FindManyBook(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _bookPackage_FindManyBookRequest,
    _bookPackage_BookResponse__Output
  >;
  FindManyBook(
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _bookPackage_FindManyBookRequest,
    _bookPackage_BookResponse__Output
  >;
  findManyBook(ids: Observable<FindManyBookRequest>): Observable<BookResponse>;
  findManyBook(
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _bookPackage_FindManyBookRequest,
    _bookPackage_BookResponse__Output
  >;
  findManyBook(
    options?: grpc.CallOptions,
  ): grpc.ClientDuplexStream<
    _bookPackage_FindManyBookRequest,
    _bookPackage_BookResponse__Output
  >;

  FindOneBook(
    argument: _bookPackage_FindOneBookRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_FindOneBookResponse__Output>,
  ): grpc.ClientUnaryCall;
  FindOneBook(
    argument: _bookPackage_FindOneBookRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_bookPackage_FindOneBookResponse__Output>,
  ): grpc.ClientUnaryCall;
  FindOneBook(
    argument: _bookPackage_FindOneBookRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_FindOneBookResponse__Output>,
  ): grpc.ClientUnaryCall;
  FindOneBook(
    argument: _bookPackage_FindOneBookRequest,
    callback: grpc.requestCallback<_bookPackage_FindOneBookResponse__Output>,
  ): grpc.ClientUnaryCall;
  findOneBook(
    argument: _bookPackage_FindOneBookRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_FindOneBookResponse__Output>,
  ): grpc.ClientUnaryCall;
  findOneBook(
    argument: _bookPackage_FindOneBookRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_bookPackage_FindOneBookResponse__Output>,
  ): grpc.ClientUnaryCall;
  findOneBook(
    argument: _bookPackage_FindOneBookRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_FindOneBookResponse__Output>,
  ): grpc.ClientUnaryCall;
  findOneBook(
    argument: _bookPackage_FindOneBookRequest,
    callback: grpc.requestCallback<_bookPackage_FindOneBookResponse__Output>,
  ): grpc.ClientUnaryCall;

  GetAllBook(
    argument: _bookPackage_GetAllBookRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_bookPackage_GetAllBookResponse__Output>;
  GetAllBook(
    argument: _bookPackage_GetAllBookRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_bookPackage_GetAllBookResponse__Output>;
  getAllBook(
    argument: _bookPackage_GetAllBookRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_bookPackage_GetAllBookResponse__Output>;
  getAllBook(
    argument: _bookPackage_GetAllBookRequest,
    options?: grpc.CallOptions,
  ): grpc.ClientReadableStream<_bookPackage_GetAllBookResponse__Output>;

  UpdateBook(
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_UpdateBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_UpdateBookRequest>;
  UpdateBook(
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_bookPackage_UpdateBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_UpdateBookRequest>;
  UpdateBook(
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_UpdateBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_UpdateBookRequest>;
  UpdateBook(
    callback: grpc.requestCallback<_bookPackage_UpdateBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_UpdateBookRequest>;
  updateBook(
    book: Observable<AddBookRequest>,
  ): grpc.ClientWritableStream<_bookPackage_UpdateBookRequest>;
  updateBook(
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_UpdateBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_UpdateBookRequest>;
  updateBook(
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_bookPackage_UpdateBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_UpdateBookRequest>;
  updateBook(
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_bookPackage_UpdateBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_UpdateBookRequest>;
  updateBook(
    callback: grpc.requestCallback<_bookPackage_UpdateBookResponse__Output>,
  ): grpc.ClientWritableStream<_bookPackage_UpdateBookRequest>;
}

export interface BookServiceHandlers extends grpc.UntypedServiceImplementation {
  AddBook: grpc.handleClientStreamingCall<
    _bookPackage_AddBookRequest__Output,
    _bookPackage_AddBookResponse
  >;

  DeleteBook: grpc.handleServerStreamingCall<
    _bookPackage_DeleteBookRequest__Output,
    _bookPackage_DeleteBookResponse
  >;

  FindManyBook: grpc.handleBidiStreamingCall<
    _bookPackage_FindManyBookRequest__Output,
    _bookPackage_BookResponse
  >;

  FindOneBook: grpc.handleUnaryCall<
    _bookPackage_FindOneBookRequest__Output,
    _bookPackage_FindOneBookResponse
  >;

  GetAllBook: grpc.handleServerStreamingCall<
    _bookPackage_GetAllBookRequest__Output,
    _bookPackage_GetAllBookResponse
  >;

  UpdateBook: grpc.handleClientStreamingCall<
    _bookPackage_UpdateBookRequest__Output,
    _bookPackage_UpdateBookResponse
  >;
}

export interface BookServiceDefinition extends grpc.ServiceDefinition {
  AddBook: MethodDefinition<
    _bookPackage_AddBookRequest,
    _bookPackage_AddBookResponse,
    _bookPackage_AddBookRequest__Output,
    _bookPackage_AddBookResponse__Output
  >;
  DeleteBook: MethodDefinition<
    _bookPackage_DeleteBookRequest,
    _bookPackage_DeleteBookResponse,
    _bookPackage_DeleteBookRequest__Output,
    _bookPackage_DeleteBookResponse__Output
  >;
  FindManyBook: MethodDefinition<
    _bookPackage_FindManyBookRequest,
    _bookPackage_BookResponse,
    _bookPackage_FindManyBookRequest__Output,
    _bookPackage_BookResponse__Output
  >;
  FindOneBook: MethodDefinition<
    _bookPackage_FindOneBookRequest,
    _bookPackage_FindOneBookResponse,
    _bookPackage_FindOneBookRequest__Output,
    _bookPackage_FindOneBookResponse__Output
  >;
  GetAllBook: MethodDefinition<
    _bookPackage_GetAllBookRequest,
    _bookPackage_GetAllBookResponse,
    _bookPackage_GetAllBookRequest__Output,
    _bookPackage_GetAllBookResponse__Output
  >;
  UpdateBook: MethodDefinition<
    _bookPackage_UpdateBookRequest,
    _bookPackage_UpdateBookResponse,
    _bookPackage_UpdateBookRequest__Output,
    _bookPackage_UpdateBookResponse__Output
  >;
}
