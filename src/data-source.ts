import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { totalMigrationInit1678994739001 } from './database/migrations/1678994739001-totalMigrationInit';
import { Brand } from './products/entities/brand.entety';
import { Category } from './products/entities/category.entety';
import { Product } from './products/entities/product.entety';
import { Customer } from './users/entities/customer.entety';
import { OrderProduct } from './users/entities/order-product.entity';
import { Order } from './users/entities/order.entety';
import { User } from './users/entities/user.entety';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'milinhoroot36971992',
  password: 'NestJs-TypeORM$36971992',
  database: 'milo_db',
  synchronize: false,
  logging: false,
  entities: [Product, User, Customer, Brand, Category, Order, OrderProduct],
  migrations: [totalMigrationInit1678994739001],
});
