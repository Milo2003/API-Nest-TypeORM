"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT,
        },
        mongo: {
            dbName: process.env.MONGO_DB,
            user: process.env.MONGO_INITDB_ROOT_USERNAME,
            password: process.env.MONGO_INITDB_ROOT_PASSWORD,
            port: parseInt(process.env.MONGO_PORT, 10),
            host: process.env.MONGO_HOST,
            connection: process.env.MONGO_CONNECTION,
        },
        postgres: {
            dbName: process.env.POSTGRES_DB,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            host: process.env.POSTGRES_HOST,
        },
        mysql: {
            dbName: process.env.MYSQL_DATABASE,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_ROOT_PASSWORD,
            port: parseInt(process.env.MYSQL_PORT, 10),
            host: process.env.MYSQL_HOST,
        },
        mariadb: {
            dbName: process.env.MARIADB_DATABASE,
            user: process.env.MARIADB_USER,
            password: process.env.MARIADB_ROOT_PASSWORD,
            port: parseInt(process.env.MARIADB_PORT, 10),
            host: process.env.MARIADB_HOST,
        },
        apiKey: process.env.API_KEY,
    };
});
//# sourceMappingURL=config.js.map