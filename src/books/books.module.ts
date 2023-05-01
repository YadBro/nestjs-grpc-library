import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientsModule } from '@nestjs/microservices';
import { grpcBookClientOptions } from 'src/grpc-client.options';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserAuthMiddleware } from 'src/user-auth/user-auth.middleware';

@Module({
  providers: [BooksService, PrismaService],
  controllers: [BooksController],
  imports: [
    ClientsModule.register([
      {
        name: 'bookPackage',
        ...grpcBookClientOptions,
      },
    ]),
  ],
})
export class BooksModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserAuthMiddleware).forRoutes(BooksController);
  }
}
