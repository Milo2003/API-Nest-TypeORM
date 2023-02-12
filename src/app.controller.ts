import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('new')
  newEndpoint() {
    return 'newEndpoint';
  }
  @Get('/hello/')
  hello() {
    return ' con /sas/';
  }
  @Get('tasks')
  getTasks() {
    return this.appService.getTasks();
  }
}
