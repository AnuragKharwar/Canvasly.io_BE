import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  console.log('Starting backend...');
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: ['http://localhost:3000'], // List of allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // List of allowed methods
    credentials: true, // Allow cookies to be sent
  });

  await app.listen(3001);
}
bootstrap();
