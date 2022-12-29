import { User } from './user.entety';
import { Product } from '../../products/entities/product.entety';

export class Order {
  date: Date;
  user: User;
  products: Product[];
  total: number;
  amount: number;
}
