import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola mis milos';
  }
  @Get('new')
  newEndpoint() {
    return 'newEndpoint';
  }
  @Get('/hello/')
  hello() {
    return ' con /sas/';
  }
}
