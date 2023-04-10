import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function swagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('User Example')
    .setDescription('Microserviço de Usuarios')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
