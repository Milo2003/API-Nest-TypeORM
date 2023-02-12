import { SchemaFactory, Prop, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { User } from './user.entety';
import { Product } from '../../products/entities/product.entety';
import { Customer } from './customer.entety';

@Schema()
export class Order extends Document {
  @Prop({ type: Date })
  date: Date;
  @Prop()
  user: User;
  // @Prop()
  // products: Product[];
  @Prop()
  total: number;
  @Prop()
  amount: number;
  @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  customer: Customer | Types.ObjectId;
  @Prop({ type: [{ type: Types.ObjectId, ref: Product.name }] })
  products: Types.Array<Product>;
}

export const OrderSSchema = SchemaFactory.createForClass(Order);
