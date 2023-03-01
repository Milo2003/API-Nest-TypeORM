import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';

const API_KEY = '123456';
const PROD_API_KEY = 'PROD_123456';

// client.query('SELECT * FROM tasks', (err, res) => {
//   console.log(err);
//   console.log(res.rows);
// });
@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      name: 'postgres',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, dbName, password, host, port } = configService.postgres;
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password,
          database: dbName,
          synchronize: false,
          autoLoadEntities: true,
        };
      },
      inject: [config.KEY],
    }),
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      name: 'mysql',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, dbName, password, host, port } = configService.mysql;
        return {
          type: 'mysql',
          host,
          port,
          username: user,
          password,
          database: dbName,
          synchronize: true,
          autoLoadEntities: true,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? PROD_API_KEY : API_KEY,
    },
    {
      provide: 'PG',
      useFactory: (configService: ConfigType<typeof config>) => {
        const { user, host, dbName, password, port } = configService.postgres;
        const client = new Client({
          user,
          host,
          database: dbName,
          password,
          port,
        });
        client.connect();
        return client;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'PG', TypeOrmModule],
})
export class DatabaseModule {}
