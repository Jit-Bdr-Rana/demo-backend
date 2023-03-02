import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';
import { Payroll } from './entities/payroll.entity';

@Injectable()
export class PayrollService {
  constructor(
    @InjectModel(Payroll.name) private payrollSchema: Model<Payroll>,
  ) {}
  create(createPayrollDto: CreatePayrollDto) {
    return this.payrollSchema.create({
      amount: createPayrollDto.amount,
      date: createPayrollDto.date,
      department: createPayrollDto.department_id,
      employee: createPayrollDto.employee_id,
    });
  }

  findAll() {
    return this.payrollSchema
      .find({}, { __v: 0 })
      .populate('employee', { __v: 0 })
      .populate('department', { __v: 0 });
  }

  findOne(id: string) {
    return this.payrollSchema
      .findById(id)
      .populate('employee', { __v: 0 })
      .populate('department', { __v: 0 });
  }

  update(id: string, updatePayrollDto: UpdatePayrollDto) {
    return this.payrollSchema
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            amount: updatePayrollDto.amount,
            date: updatePayrollDto.date,
            department: updatePayrollDto.department_id,
            employee: updatePayrollDto.employee_id,
          },
        },
        { new: true },
      )
      .populate('employee', { __v: 0 })
      .populate('department', { __v: 0 })
      .exec();
  }

  remove(id: string) {
    return this.payrollSchema.deleteOne({ _id: id });
  }
}
