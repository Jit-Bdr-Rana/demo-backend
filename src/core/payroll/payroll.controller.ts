import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('payroll')
@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Post()
  async create(
    @Body() createPayrollDto: CreatePayrollDto,
    @Res() res: Response,
  ) {
    try {
      const payroll = await this.payrollService.create(createPayrollDto);
      return res
        .send({
          data: payroll,
          message: 'payroll created successfully',
          status: true,
        })
        .status(201);
    } catch (e) {
      return res
        .send({
          error: e,
          message: 'Oops something went wrong',
          status: false,
        })
        .status(500);
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    const payrollList = await this.payrollService.findAll();
    try {
      return res
        .send({
          data: payrollList,
          message: 'payroll list successfully',
          status: true,
        })
        .status(200);
    } catch (e) {
      return res
        .send({
          error: e,
          message: 'Oops something went wrong',
          status: false,
        })
        .status(500);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const payroll = await this.payrollService.findOne(id);
    try {
      return res
        .send({
          data: payroll,
          message: 'payroll list successfully',
          status: true,
        })
        .status(200);
    } catch (e) {
      return res
        .send({
          error: e,
          message: 'Oops something went wrong',
          status: false,
        })
        .status(500);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePayrollDto: UpdatePayrollDto,
    @Res() res: Response,
  ) {
    const payroll = await this.payrollService.update(id, updatePayrollDto);
    try {
      return res
        .send({
          data: payroll,
          message: 'payroll updated successfully',
          status: true,
        })
        .status(200);
    } catch (e) {
      return res
        .send({
          error: e,
          message: 'Oops something went wrong',
          status: false,
        })
        .status(500);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    const payroll = await this.payrollService.remove(id);
    try {
      return res
        .send({
          data: payroll,
          message: 'payroll deleted successfully',
          status: true,
        })
        .status(200);
    } catch (e) {
      return res
        .send({
          error: e,
          message: 'Oops something went wrong',
          status: false,
        })
        .status(500);
    }
  }
}
