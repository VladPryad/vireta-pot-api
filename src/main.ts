import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GrpcOptions, MicroserviceOptions, Transport } from '@nestjs/microservices'
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config({path: '../.env'});

const microserviceOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: "rpc",
    url: `0.0.0.0:${process.env.PORT_GRPC}`,
    protoPath: join(process.cwd(), 'src/proto/rpc.proto')
  }
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.connectMicroservice(microserviceOptions);
  await app.startAllMicroservicesAsync();

  await app.listen(process.env.PORT_REST);
}

(async () => await bootstrap())();