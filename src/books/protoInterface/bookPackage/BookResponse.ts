// Original file: node_modules/grpc-nest-proto/protos/book.proto

import type { User as _bookPackage_User, User__Output as _bookPackage_User__Output } from '../bookPackage/User';

export interface BookResponse {
  'id'?: (number);
  'name'?: (string);
  'user'?: (_bookPackage_User | null);
}

export interface BookResponse__Output {
  'id'?: (number);
  'name'?: (string);
  'user'?: (_bookPackage_User__Output);
}
