import { Module } from '@nestjs/common';
import { YelpProxyController } from './app.controller';


@Module({
  imports: [],
  controllers: [YelpProxyController],
  providers: [],
})
export class AppModule { }
