import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CreateOrderProductDto,
  UpdateOrderProductDto,
} from '../dtos/OrderProduct.dtos';
import { OrderProductService } from '../services/order-product.service';

@Controller('order-product')
export class OrderProductController {
  constructor(private orderProductService: OrderProductService) {}
  @Get()
  getItems() {
    return this.orderProductService.find();
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.orderProductService.findOne(id);
  }

  @Post()
  createOrderProduct(@Body() payload: CreateOrderProductDto) {
    return this.orderProductService.create(payload);
  }
  @Put(':id')
  updateOrderProduct(
    @Param('id') id: number,
    @Body() payload: UpdateOrderProductDto,
  ) {
    return this.orderProductService.update(id, payload);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.orderProductService.delete(id);
  }
}
