"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entety_1 = require("../entities/product.entety");
let ProductsService = class ProductsService {
    constructor(productRepo) {
        this.productRepo = productRepo;
    }
    findAll(params) {
        if (params) {
            return this.productRepo.find();
        }
        return this.productRepo.find();
    }
    async findOne(id) {
        const product = await this.productRepo.findOneBy({ id });
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return product;
    }
    create(data) {
        const product = this.productRepo.create(data);
        return this.productRepo.save(product);
    }
    async update(id, changes) {
        const product = await this.productRepo.findOneBy({ id });
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        this.productRepo.merge(product, changes);
        return this.productRepo.save(product);
    }
    async delete(id) {
        const deleteProduct = await this.productRepo.delete(id);
        if (deleteProduct.affected === 0) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return { message: `The product ${id} has been deleted` };
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entety_1.Product, 'postgres')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map