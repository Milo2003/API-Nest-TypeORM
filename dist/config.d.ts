declare const _default: (() => {
    database: {
        name: string;
        port: string;
    };
    mongo: {
        dbName: string;
        user: string;
        password: string;
        port: number;
        host: string;
        connection: string;
    };
    postgres: {
        dbName: string;
        user: string;
        password: string;
        port: number;
        host: string;
    };
    mysql: {
        dbName: string;
        user: string;
        password: string;
        port: number;
        host: string;
    };
    mariadb: {
        dbName: string;
        user: string;
        password: string;
        port: number;
        host: string;
    };
    apiKey: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        name: string;
        port: string;
    };
    mongo: {
        dbName: string;
        user: string;
        password: string;
        port: number;
        host: string;
        connection: string;
    };
    postgres: {
        dbName: string;
        user: string;
        password: string;
        port: number;
        host: string;
    };
    mysql: {
        dbName: string;
        user: string;
        password: string;
        port: number;
        host: string;
    };
    mariadb: {
        dbName: string;
        user: string;
        password: string;
        port: number;
        host: string;
    };
    apiKey: string;
}>;
export default _default;
