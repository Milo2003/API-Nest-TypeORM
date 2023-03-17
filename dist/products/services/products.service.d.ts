import { Repository } from 'typeorm';
import { CreateProductDto, FilterProductDto, UpdateProductDto } from '../dtos/products.dtos';
import { Product } from '../entities/product.entety';
export declare class ProductsService {
    private productRepo;
    constructor(productRepo: Repository<Product>);
    findAll(params?: FilterProductDto): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(data: CreateProductDto): Promise<Product>;
    update(id: number, changes: UpdateProductDto): Promise<Product>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
