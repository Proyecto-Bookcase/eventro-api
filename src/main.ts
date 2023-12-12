import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {cors: false});
    await app.listen(5000)

    console.log(`=> Server running at http://localhost:5000/`)
    console.log(`=> GraphQL server running at http://localhost:5000/graphql`)
}

bootstrap();
