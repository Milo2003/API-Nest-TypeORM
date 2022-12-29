import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';
import { Order } from '../entities/order.entety';
import { User } from '../entities/user.entety';

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  findAll() {
    return this.orders;
  }
  findOne(user: User) {
    // const { id } = user;
    // const order = this.orders.find((item) => item.user.id === user.id);
    // if (!order) {
    //   throw new NotFoundException(`orders del ${id} not found`);
    // }
    // return Order;
  }
  create(payload: CreateOrderDto) {
    // const newOrder = {
    //   ...payload,
    // };
    // this.orders.push(newOrder);
    // return newOrder;
  }
  delete(id: number) {
    const index = this.orders.findIndex((item) => item.user.id === id);
    if (index === -1) {
      throw new NotFoundException(`Order #${id} not found`);
    }
    this.orders.splice(index, 1);
    return { message: `El Ordero ${id} se elimino correctamente` };
  }
  update(id: number, payload: UpdateOrderDto) {
    //   const find = this.findOne(id);
    //   if (find) {
    //     const index = this.orders.findIndex((item) => item.id === id);
    //     this.orders[index] = {
    //       ...find,
    //       ...payload,
    //     };
    //     return this.orders[index];
    //   }
    //   return null;
  }
}
