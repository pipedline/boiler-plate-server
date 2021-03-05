import { EntityRepository, Repository } from 'typeorm';
import { Product } from './product.entity';
import { Banner } from '../banner/banner.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

  findOneById(id: number): Promise<Product> {
    return this.findOne({
      id,
    });
  }

  findAllAndCount(): Promise<[Product[], number]> {
    return this.findAndCount();
  }
}
