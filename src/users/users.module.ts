import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { UsersController } from './controllers/users.controller';
import { userService } from './services/users.service';
import { ProductsModule } from 'src/products/products.module';
import { User, UserSchema } from './entities/user.entety';
import { Order, OrderSSchema } from './entities/order.entety';
import { Customer, CustomerSchema } from './entities/customer.entety';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
@Module({
  imports: [
    ProductsModule,
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
      { name: User.name, schema: UserSchema },
      { name: Order.name, schema: OrderSSchema },
    ]),
  ],
  controllers: [CustomersController, UsersController, OrdersController],
  providers: [CustomersService, userService, OrdersService],
})
export class UsersModule {}
