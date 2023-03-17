"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const products_module_1 = require("./products/products.module");
const database_module_1 = require("./database/database.module");
const axios_2 = require("axios");
const environments_1 = require("./environments");
const config_2 = require("./config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: environments_1.environments[process.env.NODE_ENV] || '.env',
                load: [config_2.default],
                isGlobal: true,
                validationSchema: Joi.object({
                    API_KEY: Joi.number(),
                    DATABASE_NAME: Joi.string(),
                    DATABASE_PORT: Joi.number(),
                    POSTGRES_DB: Joi.string(),
                    POSTGRES_USER: Joi.string(),
                    POSTGRES_PASSWORD: Joi.string(),
                }),
            }),
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            axios_1.HttpModule,
            database_module_1.DatabaseModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: 'TASKS',
                useFactory: async () => {
                    const response = await (0, axios_2.default)({
                        method: 'GET',
                        url: 'https://jsonplaceholder.typicode.com/todos',
                    });
                    return response.data;
                },
                inject: [axios_1.HttpService],
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map