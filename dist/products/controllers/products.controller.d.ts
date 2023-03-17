import { ProductsService } from '../services/products.service';
import { CreateProductDto, UpdateProductDto, FilterProductDto } from '../dtos/products.dtos';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProductFilter(): string;
    get(params: FilterProductDto): Promise<import("../entities/product.entety").Product[]>;
    getProduct(id: number): Promise<import("../entities/product.entety").Product>;
    create(payload: CreateProductDto): Promise<import("../entities/product.entety").Product>;
    update(id: number, payload: UpdateProductDto): Promise<import("../entities/product.entety").Product>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
