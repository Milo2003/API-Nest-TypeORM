import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';
export declare class CustomersController {
    private customersService;
    constructor(customersService: CustomersService);
    get(): Promise<import("../entities/customer.entety").Customer[]>;
    getOne(id: number): Promise<import("../entities/customer.entety").Customer>;
    create(payload: CreateCustomerDto): Promise<import("../entities/customer.entety").Customer>;
    update(id: number, payload: UpdateCustomerDto): Promise<import("../entities/customer.entety").Customer>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
