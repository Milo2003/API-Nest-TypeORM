import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Put,
} from '@nestjs/common';

import { OrdersService } from '../services/orders.service';
import {
  AddProductsToOrderDto,
  CreateOrderDto,
  UpdateOrderDto,
} from '../dtos/orders.dtos';
import { MongoIdPipe } from 'src/common/mongo-id.pipe';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  get() {
    return this.ordersService.findAll();
  }
  @Get(':id')
  getOne(@Param('id', MongoIdPipe) id: string) {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateOrderDto) {
    return this.ordersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.ordersService.delete(id);
  }
  @Delete(':id/product/:productId')
  removeProduct(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return this.ordersService.removeProduct(id, productId);
  }
  @Put(':id/products')
  addProducts(@Param('id') id: string, @Body() payload: AddProductsToOrderDto) {
    return this.ordersService.addProducts(id, payload.productsIds);
  }
}
