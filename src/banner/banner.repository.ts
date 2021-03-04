import { EntityRepository, Repository } from 'typeorm';
import { Banner } from './banner.entity';

@EntityRepository(Banner)
export class BannerRepository extends Repository<Banner> {

  async findOneById(id: number) {
    return this.findOne({
      id,
    });
  }

  findAll(): Promise<Banner[]> {
    return this.find({
      order: {
        orderNo: 'DESC',
      },
    });
  }
}
