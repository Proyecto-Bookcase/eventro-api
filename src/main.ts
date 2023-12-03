import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { prisma } from 'prisma/client/prisma';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await seed(10)
  await prisma.$disconnect()
  await app.listen(5000)
  const url = await app.getUrl()
  console.log(` Server running at URL: ${url}`)
}
bootstrap();
