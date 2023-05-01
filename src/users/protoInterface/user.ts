import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { userServiceClient as _userPackage_userServiceClient, userServiceDefinition as _userPackage_userServiceDefinition } from './userPackage/userService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  userPackage: {
    CreateUserRequest: MessageTypeDefinition
    CreateUserResponse: MessageTypeDefinition
    userService: SubtypeConstructor<typeof grpc.Client, _userPackage_userServiceClient> & { service: _userPackage_userServiceDefinition }
  }
}

