import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, employeeSchema } from './entities/employee.entity';

@Module({
  imports: [
    //this indicates that employee schema is the part of this module and will be injected in service layer
    MongooseModule.forFeature([
      { name: Employee.name, schema: employeeSchema },
    ]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
