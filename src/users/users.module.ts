import { Module } from '@nestjs/common';

import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { ProductsModule } from '../products/products.module';
import { User } from './entities/user.entety';
import { Order } from './entities/order.entety';
import { Customer } from './entities/customer.entety';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProduct } from './entities/order-product.entity';
import { OrderProductController } from './controllers/order-product.controller';
import { OrderProductService } from './services/order-product.service';
import { ProfileController } from './controllers/profile.controller';
@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([Customer, User, Order, OrderProduct], 'postgres'),
  ],
  controllers: [
    CustomersController,
    UsersController,
    OrdersController,
    OrderProductController,
    ProfileController,
  ],
  providers: [
    CustomersService,
    UsersService,
    OrdersService,
    OrderProductService,
  ],
  exports: [UsersService],
})
export class UsersModule {}
