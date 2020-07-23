import { AppModule } from './app.module';
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify';
import helmet = require('helmet');
import {WsAdapter} from '@nestjs/platform-ws';
import { NestFactory } from '@nestjs/core';

const PORT = 3000

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
      {cors: true}
  );
  app.useWebSocketAdapter(new WsAdapter(app));
  await app.listen(PORT);
  console.log("started on port " + PORT);
}

bootstrap();
