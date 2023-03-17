import { Repository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dtos';
import { Category } from '../entities/category.entety';
export declare class CategoriesService {
    private categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    create(data: CreateCategoryDto): Promise<Category>;
    delete(id: number): Promise<{
        message: string;
    }>;
    update(id: number, changes: UpdateCategoryDto): Promise<Category>;
}
