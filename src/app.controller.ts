import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/decorators/public.decorator';
import { ApiKeyGuard } from './auth/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @SetMetadata('isPublic', true)
  @Get('new')
  newEndpoint() {
    return 'newEndpoint';
  }
  @Public() // con este decorator que creamos hacemos lo mismo que @SetMetadata('isPublic', true)
  @Get('/hello/')
  hello() {
    return ' con /sas/';
  }
  @Get('tasks')
  getTasks() {
    return this.appService.getTasks();
  }
}
