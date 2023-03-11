import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './core/employee/employee.module';
import { PayrollModule } from './core/payroll/payroll.module';
import { DepartmentModule } from './core/department/department.module';
import { AuthModule } from './core/auth/auth.module';
import { UserModule } from './core/user/user.module';
import { JwtAuthGuard } from './core/auth/jwt-auth.guards';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    //mongo db url over here where demo-backend-database is our db and will be created automatically
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/demo-backend-database'),
    // all the module that comes in future need to be  import over here
    EmployeeModule,
    PayrollModule,
    DepartmentModule,
    AuthModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
