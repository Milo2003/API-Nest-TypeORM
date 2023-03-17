import { Repository } from 'typeorm';
import { Client } from 'pg';
import { ProductsService } from 'src/products/services/products.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';
import { User } from '../entities/user.entety';
export declare class userService {
    private userRepo;
    private productsService;
    private clientPg;
    constructor(userRepo: Repository<User>, productsService: ProductsService, clientPg: Client);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(data: CreateUserDto): Promise<User>;
    delete(id: number): Promise<{
        message: string;
    }>;
    update(id: number, changes: UpdateUserDto): Promise<User>;
    getOrderByUser(id: number): Promise<{
        date: Date;
        user: Promise<User>;
        products: import("../../products/entities/product.entety").Product[];
    }>;
    getTasks(): Promise<unknown>;
}
