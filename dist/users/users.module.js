"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const customers_controller_1 = require("./controllers/customers.controller");
const customers_service_1 = require("./services/customers.service");
const users_controller_1 = require("./controllers/users.controller");
const users_service_1 = require("./services/users.service");
const products_module_1 = require("../products/products.module");
const user_entety_1 = require("./entities/user.entety");
const order_entety_1 = require("./entities/order.entety");
const customer_entety_1 = require("./entities/customer.entety");
const orders_controller_1 = require("./controllers/orders.controller");
const orders_service_1 = require("./services/orders.service");
const typeorm_1 = require("@nestjs/typeorm");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            products_module_1.ProductsModule,
            typeorm_1.TypeOrmModule.forFeature([customer_entety_1.Customer, user_entety_1.User, order_entety_1.Order], 'postgres'),
        ],
        controllers: [customers_controller_1.CustomersController, users_controller_1.UsersController, orders_controller_1.OrdersController],
        providers: [customers_service_1.CustomersService, users_service_1.userService, orders_service_1.OrdersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map