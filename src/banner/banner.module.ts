import { Module } from '@nestjs/common';
import { BannerController } from './banner.controller';
import { BannerService } from './banner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerRepository } from './banner.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BannerRepository])],
  controllers: [BannerController],
  providers: [BannerService]
})
export class BannerModule {}
