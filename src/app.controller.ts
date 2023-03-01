import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
//constroller layer for app modeul
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*indicate default  route  like pages/index.tsx in nextjs project
    url: http://localhost:5000/ will hit this function 
  */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
