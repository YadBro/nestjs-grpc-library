import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule } from '@nestjs/microservices';
import { grpcUserClientOptions } from 'src/grpc-client.options';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UsersService, PrismaService],
  controllers: [UsersController],
  imports: [
    ClientsModule.register([
      {
        name: 'userPackage',
        ...grpcUserClientOptions,
      },
    ]),
  ],
})
export class UsersModule {}
