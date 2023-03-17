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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customer_entety_1 = require("../entities/customer.entety");
let CustomersService = class CustomersService {
    constructor(customerRepo) {
        this.customerRepo = customerRepo;
    }
    findAll() {
        return this.customerRepo.find();
    }
    async findOne(id) {
        const customer = await this.customerRepo.findOneBy({ id });
        if (!customer) {
            throw new common_1.NotFoundException(`Customer #${id} not found`);
        }
        return customer;
    }
    create(data) {
        const newCustomer = this.customerRepo.create(data);
        return this.customerRepo.save(newCustomer);
    }
    async delete(id) {
        const customer = await this.customerRepo.delete(id);
        if (customer.affected === 0) {
            throw new common_1.NotFoundException(`Customer #${id} not found`);
        }
        return { message: `El Customer ${id} se elimino correctamente` };
    }
    async update(id, changes) {
        const customer = await this.customerRepo.findOneBy({ id });
        if (!customer) {
            throw new common_1.NotFoundException(`Customer #${id} not found`);
        }
        this.customerRepo.merge(customer, changes);
        return this.customerRepo.save(customer);
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entety_1.Customer, 'postgres')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map