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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entety_1 = require("../entities/order.entety");
let OrdersService = class OrdersService {
    constructor(orderRepo) {
        this.orderRepo = orderRepo;
    }
    findAll() {
        return this.orderRepo.find();
    }
    async findOne(id) {
        const order = await this.orderRepo.findOneBy({ id });
        if (!order) {
            throw new common_1.NotFoundException(`orders del ${id} not found`);
        }
        return order;
    }
    create(data) {
        const newOrder = this.orderRepo.create(data);
        return this.orderRepo.save(newOrder);
    }
    async delete(id) {
        const order = await this.orderRepo.delete(id);
        if (order.affected === 0) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        return { message: `La Orden ${id} se elimino correctamente` };
    }
    async update(id, changes) {
        const order = await this.orderRepo.findOneBy({ id });
        if (!order) {
            throw new common_1.NotFoundException(`Order #${id} not found`);
        }
        this.orderRepo.merge(order, changes);
        return this.orderRepo.save(order);
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entety_1.Order, 'postgres')),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map