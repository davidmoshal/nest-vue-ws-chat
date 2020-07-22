import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import helmet = require('helmet');
import {WsAdapter} from '@nestjs/platform-ws';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
      {cors: true}
  );
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(3000);
}
bootstrap();
