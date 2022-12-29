import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import axios from 'axios';

const API_KEY = '123456';
const PROD_API_KEY = 'PROD_123456';
@Module({
  imports: [UsersModule, ProductsModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? PROD_API_KEY : API_KEY,
    },
    {
      provide: 'TASKS',
      useFactory: async () => {
        const response = await axios({
          method: 'GET',
          url: 'https://jsonplaceholder.typicode.com/todos',
        });
        return response.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
