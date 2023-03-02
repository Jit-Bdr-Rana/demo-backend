import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './core/employee/employee.module';
import { PayrollModule } from './core/payroll/payroll.module';

@Module({
  imports: [
    //mongo db url over here where demo-backend-database is our db and will be created automatically
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/demo-backend-database'),
    // all the module that comes in future need to be  import over here
    EmployeeModule,
    PayrollModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
