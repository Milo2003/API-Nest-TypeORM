import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

// import { User } from './user.entety';
// import { Product } from '../../products/entities/product.entety';
// import { Customer } from './customer.entety';

export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @CreateDateColumn()
  date: Date;
  // @Prop()
  // user: User;
  // // @Prop()
  // // products: Product[];
  @Column('int')
  total: number;
  @Column({ type: 'int' })
  amount: number;
  // @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  // customer: Customer | Types.ObjectId;
  // @Prop({ type: [{ type: Types.ObjectId, ref: Product.name }] })
  // products: Types.Array<Product>;
}
