import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../../products/entities/product.entety';
import { Order } from './order.entety';

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('int')
  quantity: number;
  @Column({ type: 'int' })
  fullPrice: number;
  @Exclude()
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
  @Exclude()
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
  @ManyToOne(() => Product)
  product: Product;
  @ManyToOne(() => Order, (order) => order.products)
  order: Order;
}
