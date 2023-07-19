import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('EnaFood.api')
        .setDescription('This is the Ena Food API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    app.useGlobalPipes(new ValidationPipe());

    SwaggerModule.setup('', app, document);

    await app.listen(3000);
}

bootstrap();
