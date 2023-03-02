import { Module } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Payroll, payrollSchema } from './entities/payroll.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payroll.name, schema: payrollSchema }]),
  ],
  controllers: [PayrollController],
  providers: [PayrollService],
})
export class PayrollModule {}
