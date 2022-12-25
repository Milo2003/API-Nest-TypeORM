import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from 'src/dtos/orders.dtos';
import { Order } from '../../entities/order.entety';

@Injectable()
export class OrdersService {
  private counterId = 1;
  private orders: Order[] = [];

  findAll() {
    return this.orders;
  }
  findOne(id: number) {
    const Order = this.orders.find((item) => item.id === id);
    if (!Order) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    return Order;
  }
  create(payload: CreateOrderDto) {
    this.counterId += 1;
    const newOrder = {
      id: this.counterId,
      ...payload,
    };
    this.orders.push(newOrder);
    return newOrder;
  }
  delete(id: number) {
    const index = this.orders.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    this.orders.splice(index, 1);
    return { message: `El Ordero ${id} se elimino correctamente` };
  }
  update(id: number, payload: UpdateOrderDto) {
    const find = this.findOne(id);
    if (find) {
      const index = this.orders.findIndex((item) => item.id === id);
      this.orders[index] = {
        ...find,
        ...payload,
      };
      return this.orders[index];
    }
    return null;
  }
}
