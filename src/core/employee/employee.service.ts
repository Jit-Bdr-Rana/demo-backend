import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeeService {
  //on constructer we inject employye model instance to intract with employee collection in db
  constructor(
    @InjectModel(Employee.name) private employeeModal: Model<Employee>,
  ) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    const employe = this.employeeModal.create({
      name: createEmployeeDto.name,
      address: createEmployeeDto.address,
      email: createEmployeeDto.email,
      gender: createEmployeeDto.gender,
      phone: createEmployeeDto.phone,
    });
    return employe;
  }

  findAll() {
    //similar to select * from employees
    return this.employeeModal.find({}, { __v: 0 });
  }

  findOne(id: string) {
    return this.employeeModal.findOne({ _id: id });
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeModal.updateOne({ _id: id }, updateEmployeeDto);
  }

  remove(id: string) {
    return this.employeeModal.deleteOne({ _id: id });
  }
}
