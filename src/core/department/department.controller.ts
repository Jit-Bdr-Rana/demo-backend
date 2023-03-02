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
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@ApiTags('department')
@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post()
  async create(
    @Body() createDepartmentDto: CreateDepartmentDto,
    @Res() res: Response,
  ) {
    try {
      const department = await this.departmentService.create(
        createDepartmentDto,
      );
      return res
        .send({
          data: department,
          message: 'department saved successfully',
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
    try {
      const departmentlist = await this.departmentService.findAll();
      return res
        .send({
          data: departmentlist,
          message: 'department fetched successfully',
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
    try {
      const department = await this.departmentService.findOne(id);
      return res
        .send({
          data: department,
          message: 'department fetched successfully',
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
    @Body() updateDepartmentDto: UpdateDepartmentDto,
    @Res() res: Response,
  ) {
    // return this.departmentService.update(+id, updateDepartmentDto);
    try {
      await this.departmentService.update(id, updateDepartmentDto);
      return res
        .send({
          data: null,
          message: 'department updated successfully',
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
    try {
      await this.departmentService.remove(id);
      return res
        .send({
          data: null,
          message: 'department deleted successfully',
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
