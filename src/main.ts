import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GrpcOptions, MicroserviceOptions, Transport } from '@nestjs/microservices'
import { WsAdapter } from '@nestjs/platform-ws'
import { IoAdapter } from '@nestjs/platform-socket.io'
import * as dotenv from 'dotenv';
import { join } from 'path';
import * as morgan from 'morgan';

dotenv.config({path: '../.env'});

const microserviceOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: "rpc",
    url: process.env.GRPC_CONNECTION_URL,
    protoPath: join(process.cwd(), 'src/proto/rpc.proto')
  }
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*"
  });
  
  app.use(morgan("tiny"));
  
  app.connectMicroservice(microserviceOptions);
  await app.startAllMicroservicesAsync();
  
  app.useWebSocketAdapter(new WsAdapter(app));

  await app.listen(process.env.PORT_REST);
}

(async () => {
  await bootstrap();
  console.log(`Pot API running on: \r\n REST: ${process.env.PORT_REST} \r\n gRPC: ${process.env.PORT_GRPC} \r\n WS:   ${process.env.PORT_WS}`)
})();