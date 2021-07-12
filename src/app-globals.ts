import { INestApplication, ValidationPipe } from "@nestjs/common";



export function setupAppPipeline(nestApp: INestApplication) {
    nestApp.setGlobalPrefix("v1");
    nestApp.enableCors();
    nestApp.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );
}