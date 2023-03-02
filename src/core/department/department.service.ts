import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectModel(Department.name) private departmentmodel: Model<Department>,
  ) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentmodel.create({
      description: createDepartmentDto.description,
      name: createDepartmentDto.name,
      //  /s   max: { 12: 12 },
      salary_range: {
        min: 1,
        max: 3,
      },
    });
  }

  findAll() {
    return this.departmentmodel.find({});
  }

  findOne(id: string) {
    return this.departmentmodel.findById(id);
  }

  update(id: string, updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentmodel.updateOne(
      {
        description: updateDepartmentDto.description,
        name: updateDepartmentDto?.name,
        salary_range: {
          min: updateDepartmentDto?.salary_range?.min,
          max: updateDepartmentDto?.salary_range?.max,
        },
      },
      { _id: id },
    );
  }

  async remove(id: string) {
    const department = await this.departmentmodel.findOne({ _id: id });
    return await department.delete();
  }
}
