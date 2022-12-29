import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';

import { OrdersService } from '../services/orders.service';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  get() {
    return this.ordersService.findAll();
  }
  // @Get(':id')
  // getOne(@Param('id', ParseIntPipe) id: number) {
  //   return this.ordersService.findOne(id);
  // }

  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateOrderDto) {
    return this.ordersService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ordersService.delete(+id);
  }
}
