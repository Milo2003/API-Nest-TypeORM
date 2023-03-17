import { Repository } from 'typeorm';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';
import { Brand } from '../entities/brand.entety';
export declare class BrandService {
    private brandRepo;
    constructor(brandRepo: Repository<Brand>);
    findAll(): Promise<Brand[]>;
    findOne(id: number): Promise<Brand>;
    create(data: CreateBrandDto): Promise<Brand>;
    delete(id: number): Promise<{
        message: string;
    }>;
    update(id: number, changes: UpdateBrandDto): Promise<Brand>;
}
