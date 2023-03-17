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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const brand_entety_1 = require("../entities/brand.entety");
let BrandService = class BrandService {
    constructor(brandRepo) {
        this.brandRepo = brandRepo;
    }
    findAll() {
        return this.brandRepo.find();
    }
    async findOne(id) {
        const product = await this.brandRepo.findOneBy({ id });
        if (!product) {
            throw new common_1.NotFoundException(`Product #${id} not found`);
        }
        return product;
    }
    create(data) {
        const newBrand = this.brandRepo.create(data);
        return this.brandRepo.save(newBrand);
    }
    async delete(id) {
        const brand = await this.brandRepo.delete(id);
        if (brand.affected === 0) {
            throw new common_1.NotFoundException(`Brand #${id} not found`);
        }
        return { message: `The brand ${id} has been deleted successfuly` };
    }
    async update(id, changes) {
        const brand = await this.brandRepo.findOneBy({ id });
        if (!brand) {
            throw new common_1.NotFoundException(`Brand #${id} not found`);
        }
        this.brandRepo.merge(brand, changes);
        return this.brandRepo.save(brand);
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(brand_entety_1.Brand, 'postgres')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BrandService);
exports.BrandService = BrandService;
//# sourceMappingURL=brands.service.js.map