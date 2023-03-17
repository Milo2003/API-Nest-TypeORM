import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './customer.entety';
import { OrderProduct } from './order-product.entity';

// import { Product } from '../../products/entities/product.entety';
// import { Customer } from './customer.entety';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('int')
  total: number;
  @Column({ type: 'int' })
  amount: number;
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Exclude()
  createAt: Date;
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Exclude()
  updateAt: Date;
  @ManyToOne(() => Customer, (customer) => customer.orders)
  customer: Customer;
  @Exclude()
  @OneToMany(() => OrderProduct, (product) => product.order)
  products: OrderProduct[];

  //Solo como ej ya que es casi lo mismo que products =>
  @Expose()
  get items() {
    if (this.products) {
      return this.products
        .filter((product) => !!product)
        .map((product) => ({
          ...product.product,
          quantity: product.quantity,
          productId: product.id,
        }));
    }
    return [];
  }

  @Expose()
  get fullPrice() {
    if (this.products) {
      return this.products
        .filter((item) => !!item)
        .reduce((total, item) => {
          const totalItem = item.product.price * item.quantity;
          return total + totalItem;
        }, 0);
    }
    return 0;
  }
}
