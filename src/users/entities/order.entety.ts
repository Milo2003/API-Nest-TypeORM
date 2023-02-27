import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// import { User } from './user.entety';
// import { Product } from '../../products/entities/product.entety';
// import { Customer } from './customer.entety';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'date' })
  date: Date;
  // @Prop()
  // user: User;
  // // @Prop()
  // // products: Product[];
  @Column()
  total: number;
  @Column()
  amount: number;
  // @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  // customer: Customer | Types.ObjectId;
  // @Prop({ type: [{ type: Types.ObjectId, ref: Product.name }] })
  // products: Types.Array<Product>;
}
