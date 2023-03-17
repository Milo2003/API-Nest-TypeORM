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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const category_entety_1 = require("../entities/category.entety");
let CategoriesService = class CategoriesService {
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    findAll() {
        return this.categoryRepo.find();
    }
    async findOne(id) {
        const category = await this.categoryRepo.findOneBy({ id });
        if (!category_entety_1.Category) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
        }
        return category;
    }
    create(data) {
        const newCategory = this.categoryRepo.create(data);
        return this.categoryRepo.save(newCategory);
    }
    async delete(id) {
        const category = await this.categoryRepo.delete(id);
        if (category.affected === 0) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
        }
        return { message: `The Category ${id} has been deleted successfully ` };
    }
    async update(id, changes) {
        const category = await this.categoryRepo.findOneBy({ id });
        if (!category) {
            throw new common_1.NotFoundException(`Category #${id} not found`);
        }
        this.categoryRepo.merge(category, changes);
        return this.categoryRepo.save(category);
    }
};
CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entety_1.Category, 'postgres')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
exports.CategoriesService = CategoriesService;
//# sourceMappingURL=categories.service.js.map