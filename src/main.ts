import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './swagger';
import { validation } from './validation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  validation(app);
  swagger(app);
  await app.listen(3000);
}
bootstrap();
