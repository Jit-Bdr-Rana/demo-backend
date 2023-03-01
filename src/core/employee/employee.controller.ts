import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiTags } from '@nestjs/swagger';
//all the business logic for employee related
//global prefix (employee) for employee module
@Controller('employee')
@ApiTags('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  //  url: http://localhost:5000/employee will hit this function using post method
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }
  //  url: http://localhost:5000/employee will hit this function using get method
  @Get()
  findAll() {
    return this.employeeService.findAll();
  }
  //  url: http://localhost:5000/employee/454784848486dd4   will hit this function using get method
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(+id);
  }
  //  url: http://localhost:5000/employee/234343dsdsf will hit this function using patch method
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }
  //  url: http://localhost:5000/employee/4757478573434 will hit this function using delete method
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
