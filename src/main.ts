import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await seed(10)
  await app.listen(5000)
  const url = await app.getUrl()
  console.log(` Server running at URL: ${url}`)
}
bootstrap();

//Hola