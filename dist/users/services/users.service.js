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
exports.userService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pg_1 = require("pg");
const products_service_1 = require("../../products/services/products.service");
const user_entety_1 = require("../entities/user.entety");
let userService = class userService {
    constructor(userRepo, productsService, clientPg) {
        this.userRepo = userRepo;
        this.productsService = productsService;
        this.clientPg = clientPg;
    }
    findAll() {
        return this.userRepo.find();
    }
    findOne(id) {
        const user = this.userRepo.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException(`User #${id} not found`);
        }
        return user;
    }
    create(data) {
        const newUser = this.userRepo.create(data);
        return this.userRepo.save(newUser);
    }
    async delete(id) {
        const newUser = await this.userRepo.delete(id);
        if (newUser.affected === 0) {
            throw new common_1.NotFoundException(`User #${id} not found`);
        }
        return { message: `User ${id} has been deleted ` };
    }
    async update(id, changes) {
        const newUser = await this.userRepo.findOneBy({ id });
        if (!newUser) {
            throw new common_1.NotFoundException(`User #${id} not found`);
        }
        this.userRepo.merge(newUser, changes);
        return this.userRepo.save(newUser);
    }
    async getOrderByUser(id) {
        const user = this.userRepo.findOneBy({ id });
        return {
            date: new Date(),
            user,
            products: await this.productsService.findAll(),
        };
    }
    getTasks() {
        return new Promise((resolve, reject) => {
            this.clientPg.query('SELECT * FROM tasks', (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res.rows);
            });
        });
    }
};
userService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entety_1.User, 'postgres')),
    __param(2, (0, common_1.Inject)('PG')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        products_service_1.ProductsService,
        pg_1.Client])
], userService);
exports.userService = userService;
//# sourceMappingURL=users.service.js.map