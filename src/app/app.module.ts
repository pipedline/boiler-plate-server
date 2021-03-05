import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerModule } from '../banner/banner.module';
import { ProductModule } from '../product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    BannerModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
