import { Repository } from 'typeorm';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customers.dtos';
import { Customer } from '../entities/customer.entety';
export declare class CustomersService {
    private customerRepo;
    constructor(customerRepo: Repository<Customer>);
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    create(data: CreateCustomerDto): Promise<Customer>;
    delete(id: number): Promise<{
        message: string;
    }>;
    update(id: number, changes: UpdateCustomerDto): Promise<Customer>;
}
