import { Injectable } from '@nestjs/common';

//service layer for app module we rarely  contain business logic because most of our will be in future comming module
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
