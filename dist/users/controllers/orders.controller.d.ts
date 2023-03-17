import { OrdersService } from '../services/orders.service';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/orders.dtos';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    get(): Promise<import("../entities/order.entety").Order[]>;
    getOne(id: number): Promise<import("../entities/order.entety").Order>;
    create(payload: CreateOrderDto): Promise<import("../entities/order.entety").Order>;
    update(id: number, payload: UpdateOrderDto): Promise<import("../entities/order.entety").Order>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
