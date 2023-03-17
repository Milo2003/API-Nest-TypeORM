import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../../products/entities/product.entety';
import {
  CreateOrderProductDto,
  UpdateOrderProductDto,
} from '../dtos/OrderProduct.dtos';
import { OrderProduct } from '../entities/order-product.entity';
import { Order } from '../entities/order.entety';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct, 'postgres')
    private productOrderRepo: Repository<OrderProduct>,
    @InjectRepository(Order, 'postgres') private orderRepo: Repository<Order>,
    @InjectRepository(Product, 'postgres')
    private productRepo: Repository<Product>,
  ) {}
  find() {
    return this.productOrderRepo.find();
  }
  async findOne(id: number) {
    const OrderProduct = this.productOrderRepo.findOneBy({ id });
    return OrderProduct;
  }
  async create(data: CreateOrderProductDto) {
    const OrderProduct = this.productOrderRepo.create(data);
    OrderProduct.product = await this.productRepo.findOneBy({
      id: data.productId,
    });
    OrderProduct.order = await this.orderRepo.findOneBy({ id: data.orderId });
    return this.productOrderRepo.save(OrderProduct);
  }
  async update(id: number, changes: UpdateOrderProductDto) {
    const OrderProduct = await this.productOrderRepo.findOneBy({ id });
    this.productOrderRepo.merge(OrderProduct, changes);
  }
  async delete(id: number) {
    const OrderProduct = this.productOrderRepo.delete(id);
    return OrderProduct;
  }
}
