// Original file: node_modules/grpc-nest-proto/protos/user.proto

import type * as grpc from '@grpc/grpc-js';
import type { MethodDefinition } from '@grpc/proto-loader';
import type {
  CreateUserRequest as _userPackage_CreateUserRequest,
  CreateUserRequest__Output as _userPackage_CreateUserRequest__Output,
} from '../userPackage/CreateUserRequest';
import type {
  CreateUserResponse,
  CreateUserResponse as _userPackage_CreateUserResponse,
  CreateUserResponse__Output as _userPackage_CreateUserResponse__Output,
} from '../userPackage/CreateUserResponse';
import { Observable } from 'rxjs';

export interface userServiceClient extends grpc.Client {
  CreateUser(
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_userPackage_CreateUserResponse__Output>,
  ): grpc.ClientWritableStream<_userPackage_CreateUserRequest>;
  CreateUser(
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_userPackage_CreateUserResponse__Output>,
  ): grpc.ClientWritableStream<_userPackage_CreateUserRequest>;
  CreateUser(
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_userPackage_CreateUserResponse__Output>,
  ): grpc.ClientWritableStream<_userPackage_CreateUserRequest>;
  CreateUser(
    callback: grpc.requestCallback<_userPackage_CreateUserResponse__Output>,
  ): grpc.ClientWritableStream<_userPackage_CreateUserRequest>;
  createUser(
    user: Observable<CreateUserResponse>,
  ): grpc.ClientWritableStream<_userPackage_CreateUserRequest>;
  createUser(
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_userPackage_CreateUserResponse__Output>,
  ): grpc.ClientWritableStream<_userPackage_CreateUserRequest>;
  createUser(
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_userPackage_CreateUserResponse__Output>,
  ): grpc.ClientWritableStream<_userPackage_CreateUserRequest>;
  createUser(
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_userPackage_CreateUserResponse__Output>,
  ): grpc.ClientWritableStream<_userPackage_CreateUserRequest>;
  createUser(
    callback: grpc.requestCallback<_userPackage_CreateUserResponse__Output>,
  ): grpc.ClientWritableStream<_userPackage_CreateUserRequest>;
}

export interface userServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateUser: grpc.handleClientStreamingCall<
    _userPackage_CreateUserRequest__Output,
    _userPackage_CreateUserResponse
  >;
}

export interface userServiceDefinition extends grpc.ServiceDefinition {
  CreateUser: MethodDefinition<
    _userPackage_CreateUserRequest,
    _userPackage_CreateUserResponse,
    _userPackage_CreateUserRequest__Output,
    _userPackage_CreateUserResponse__Output
  >;
}
