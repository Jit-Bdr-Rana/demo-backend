import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Department, departmentSchema } from './entities/department.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Department.name, schema: departmentSchema },
    ]),
  ],

  controllers: [DepartmentController],
  providers: [DepartmentService],
})
export class DepartmentModule {}
