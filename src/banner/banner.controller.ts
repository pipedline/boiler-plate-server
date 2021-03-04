import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BannerService } from './banner.service';
import { Banner } from './banner.entity';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateResult } from 'typeorm';

@Controller('banner')
export class BannerController {

  constructor(private bannerService: BannerService) {
  }

  @Get()
  getAllBanners(): Promise<Banner[]> {
    return this.bannerService.findAll();
  }

  @Post()
  createBanner(@Body() createBannerDto: CreateBannerDto): Promise<Banner> {
    return this.bannerService.create(createBannerDto);
  }

  @Put(':id')
  updateBanner(@Param('id') id: number, @Body() createBannerDto: CreateBannerDto): Promise<Banner> {
    return this.bannerService.updateById(id, createBannerDto);
  }

  @Delete(':id')
  deleteBanner(@Param('id') id: number): Promise<UpdateResult> {
    return this.bannerService.deleteById(id)
  }
}
