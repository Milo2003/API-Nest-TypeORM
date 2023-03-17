import { ConfigType } from '@nestjs/config';
import config from './config';
import { Client } from 'pg';
export declare class AppService {
    private tasks;
    private clientPg;
    private configService;
    constructor(tasks: any[], clientPg: Client, configService: ConfigType<typeof config>);
    getHello(): string;
    getTasks(): Promise<unknown>;
}
