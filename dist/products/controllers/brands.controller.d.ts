import { BrandService } from '../services/brands.service';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dtos';
export declare class BrandController {
    private brandsService;
    constructor(brandsService: BrandService);
    get(): Promise<import("../entities/brand.entety").Brand[]>;
    getOne(id: number): Promise<import("../entities/brand.entety").Brand>;
    create(payload: CreateBrandDto): Promise<import("../entities/brand.entety").Brand>;
    update(id: number, payload: UpdateBrandDto): Promise<import("../entities/brand.entety").Brand>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
