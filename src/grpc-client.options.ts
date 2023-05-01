import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const grpcBookClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'bookPackage',
    protoPath: join(
      __dirname,
      '../node_modules/grpc-nest-proto/protos/book.proto',
    ),
    url: 'localhost:50001',
  },
};

export const grpcUserClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'userPackage',
    protoPath: join(
      __dirname,
      '../node_modules/grpc-nest-proto/protos/user.proto',
    ),
    url: 'localhost:50002',
  },
};
