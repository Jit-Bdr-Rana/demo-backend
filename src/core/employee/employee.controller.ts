import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Res,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Public } from 'src/constraints/meta.constraints';
//all the business logic for employee related
//global prefix (employee) for employee module
@Controller('employee')
@ApiTags('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  //  url: http://localhost:5000/employee will hit this function using post method
  @Post()
  async create(
    @Body() createEmployeeDto: CreateEmployeeDto,
    @Res() response: Response,
  ) {
    try {
      const allEmployee = await this.employeeService.create(createEmployeeDto);

      response.send({ data: allEmployee, message: 'success' }).status(201);
    } catch (e) {
      response
        .send({ data: null, message: 'internal server error' })
        .status(500);
    }
  }
  //  url: http://localhost:5000/employee will hit this function using get method
  @Get()
  @Public()
  async findAll(@Res() response: Response) {
    try {
      console.log(process?.env?.jwt_secret);
      const allEmployee = await this.employeeService.findAll();
      response.send({ data: allEmployee, message: 'success' }).status(201);
    } catch (e) {
      response
        .send({ data: null, message: 'internal server error' })
        .status(500);
    }
  }
  //  url: http://localhost:5000/employee/454784848486dd4   will hit this function using get method
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response: Response) {
    try {
      const allEmployee = await this.employeeService.findOne(id);
      response.send({ data: allEmployee, message: 'success' }).status(201);
    } catch (e) {
      response
        .send({ data: null, message: 'internal server error' })
        .status(500);
    }
    // return this.employeeService.findOne(+id);
  }
  //  url: http://localhost:5000/employee/234343dsdsf will hit this function using patch method
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
    @Res() response: Response,
  ) {
    // return this.employeeService.update(+id, updateEmployeeDto);
    try {
      const employee = await this.employeeService.update(id, updateEmployeeDto);
      return response
        .send({ data: employee, message: 'successfully update' })
        .status(201);
    } catch (e) {
      response
        .send({ data: null, message: 'internal server error' })
        .status(500);
    }
  }
  //  url: http://localhost:5000/employee/4757478573434 will hit this function using delete method
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response: Response) {
    // return this.employeeService.remove(id);
    try {
      const employee = await this.employeeService.remove(id);
      return response
        .send({ data: employee, message: 'successfully delete' })
        .status(201);
    } catch (e) {
      response
        .send({ data: null, message: 'internal server error' })
        .status(500);
    }
  }
}
