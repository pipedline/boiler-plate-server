import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  discountPrice: number;

  @Column({
    name: 'thumbnail_image_url',
  })
  thumbnailUrl: string;

  @CreateDateColumn({
    name: 'first_create_dt',
    type: 'timestamp',
  })
  first_create_dt: Date;

  @UpdateDateColumn({
    name: 'last_update_dt',
    type: 'timestamp',
  })
  lastUpdateDt: Date;

  @DeleteDateColumn({
    name: 'delete_dt',
    type: 'timestamp',
  })
  deleteDt: Date;
}
