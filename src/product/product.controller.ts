import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {

  constructor(private productService: ProductService) {
  }

  @Get()
  getAllProducts(): Promise<[Product[], number]> {
    return this.productService.findAllAndCount();
  }

  @Get(':id')
  getProduct(@Param('id') id: number): Promise<Product> {
    return this.productService.findOneById(id);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id:number) {
    return this.productService.deleteById(id);
  }
}
