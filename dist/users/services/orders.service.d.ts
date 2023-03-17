import { Repository } from 'typeorm';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';
import { Order } from '../entities/order.entety';
export declare class OrdersService {
    private orderRepo;
    constructor(orderRepo: Repository<Order>);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    create(data: CreateOrderDto): Promise<Order>;
    delete(id: number): Promise<{
        message: string;
    }>;
    update(id: number, changes: UpdateOrderDto): Promise<Order>;
}
