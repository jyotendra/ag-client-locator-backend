import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { APP_PORT } from "../env";
import { setupAppPipeline } from './app-globals';


export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupAppPipeline(app);
  console.log(`Server listening on port ${APP_PORT}`);
  await app.listen(APP_PORT || 3000);
}

bootstrap();
