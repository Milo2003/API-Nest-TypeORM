"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_controller_1 = require("./controllers/products.controller");
const brands_controller_1 = require("./controllers/brands.controller");
const categories_controller_1 = require("./controllers/categories.controller");
const products_service_1 = require("./services/products.service");
const brands_service_1 = require("./services/brands.service");
const categories_service_1 = require("./services/categories.service");
const product_entety_1 = require("./entities/product.entety");
const brand_entety_1 = require("./entities/brand.entety");
const category_entety_1 = require("./entities/category.entety");
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_entety_1.Product, brand_entety_1.Brand, category_entety_1.Category], 'postgres')],
        controllers: [products_controller_1.ProductsController, categories_controller_1.CategoriesController, brands_controller_1.BrandController],
        providers: [products_service_1.ProductsService, brands_service_1.BrandService, categories_service_1.CategoriesService],
        exports: [products_service_1.ProductsService],
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map