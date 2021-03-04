import { Injectable, NotFoundException } from '@nestjs/common';
import { BannerRepository } from './banner.repository';
import { Banner } from './banner.entity';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class BannerService {

  constructor(private bannerRepository: BannerRepository) {
  }

  async findOneById(id: number) {
    const foundBanner = await this.bannerRepository.findOneById(id);

    if (!foundBanner) {
      throw new NotFoundException(`${id}인 배너를 찾지 못했습니다.`);
    }

    return foundBanner;
  }

  findAll(): Promise<Banner[]> {
    return this.bannerRepository.findAll();
  }

  create(createBannerDto: CreateBannerDto): Promise<Banner> {
    const newBanner = new Banner();

    newBanner.name = createBannerDto.name;
    newBanner.title = createBannerDto.title;
    newBanner.description = createBannerDto.description;
    newBanner.imageUrl = createBannerDto.imageUrl;
    newBanner.orderNo = createBannerDto.orderNo;

    return this.bannerRepository.save(newBanner);
  }

  async deleteById(id: number): Promise<UpdateResult> {
    const foundBanner = await this.findOneById(id);

    return this.bannerRepository.softDelete(id);
  }

  async updateById(id: number, createBannerDto: CreateBannerDto): Promise<Banner> {
    const foundBanner = await this.findOneById(id);

    foundBanner.name = createBannerDto.name;
    foundBanner.title = createBannerDto.title;
    foundBanner.description = createBannerDto.description;
    foundBanner.imageUrl = createBannerDto.imageUrl;
    foundBanner.orderNo = createBannerDto.orderNo;

    return this.bannerRepository.save(foundBanner);
  }
}
