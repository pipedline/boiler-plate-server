import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateResult } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(private productRepository: ProductRepository) {
  }

  async findOneById(id: number): Promise<Product> {
    const foundProduct = await this.productRepository.findOneById(id);

    if (!foundProduct) {
      throw new NotFoundException(`${id}인 제품을 찾지 못했습니다.`);
    }

    return foundProduct;
  }

  findAllAndCount(): Promise<[Product[], number]> {
    return this.productRepository.findAllAndCount();
  }

  create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new Product();

    Object.assign(newProduct, createProductDto);

    return this.productRepository.save(newProduct);
  }

  async deleteById(id: number): Promise<UpdateResult> {
    const foundProduct = await this.findOneById(id);

    return this.productRepository.softDelete(foundProduct.id);
  }
}
