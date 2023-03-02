import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Department } from 'src/core/department/entities/department.entity';
import { Employee } from 'src/core/employee/entities/employee.entity';

@Schema()
export class Payroll {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  })
  employee: Employee;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
  })
  department: Department;

  @Prop({
    type: Date,
  })
  date: Date;

  @Prop({
    type: Number,
  })
  amount: number;
}

export const payrollSchema = SchemaFactory.createForClass(Payroll);
