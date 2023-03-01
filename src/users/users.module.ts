import { Module } from '@nestjs/common';

import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { userService } from './services/users.service';
import { ProductsModule } from '../products/products.module';
import { User } from './entities/user.entety';
import { Order } from './entities/order.entety';
import { Customer } from './entities/customer.entety';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([Customer, User, Order], 'postgres'),
  ],
  controllers: [CustomersController, UsersController, OrdersController],
  providers: [CustomersService, userService, OrdersService],
})
export class UsersModule {}
