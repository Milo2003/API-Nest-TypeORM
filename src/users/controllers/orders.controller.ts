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

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  get() {
    return this.ordersService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateOrderDto) {
    return this.ordersService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.ordersService.delete(id);
  }
  // @Delete(':id/product/:productId')
  // removeProduct(
  //   @Param('id') id: number,
  //   @Param('productId') productId: number,
  // ) {
  //   return this.ordersService.removeProduct(id, productId);
  // }
  // @Put(':id/products')
  // addProducts(@Param('id') id: number, @Body() payload: AddProductsToOrderDto) {
  //   return this.ordersService.addProducts(id, payload.productsIds);
  // }
}
