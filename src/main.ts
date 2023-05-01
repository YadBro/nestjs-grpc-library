import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import {
  grpcBookClientOptions,
  grpcUserClientOptions,
} from './grpc-client.options';
import { Logger, ValidationPipe } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.connectMicroservice<MicroserviceOptions>(grpcBookClientOptions);
  app.connectMicroservice<MicroserviceOptions>(grpcUserClientOptions);

  await app.startAllMicroservices();
  await app.listen(3000);

  const url = await app.getUrl();

  logger.log(`App is running on: ${url}`);
}
bootstrap();
