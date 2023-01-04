import { Module, Global } from '@nestjs/common';

const API_KEY = '123456';
const PROD_API_KEY = 'PROD_123456';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? PROD_API_KEY : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
