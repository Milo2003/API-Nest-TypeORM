import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/categories.dtos';
export declare class CategoriesController {
    private categoriesService;
    getCategory(productId: string, id: string): string;
    constructor(categoriesService: CategoriesService);
    get(): Promise<import("../entities/category.entety").Category[]>;
    getOne(id: number): Promise<import("../entities/category.entety").Category>;
    create(payload: CreateCategoryDto): Promise<import("../entities/category.entety").Category>;
    update(id: string, payload: UpdateCategoryDto): Promise<import("../entities/category.entety").Category>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
