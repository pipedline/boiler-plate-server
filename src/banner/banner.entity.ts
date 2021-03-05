import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Banner {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    name: 'image_url',
  })
  imageUrl: string;

  @Column({
    name: 'order_no',
  })
  orderNo: number;

  @CreateDateColumn({
    name: 'first_create_dt',
    type: 'timestamp',
  })
  firstCreateDt: Date;

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
