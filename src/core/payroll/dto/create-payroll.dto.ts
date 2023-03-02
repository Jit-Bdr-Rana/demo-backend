import { ApiProperty } from '@nestjs/swagger';

export class CreatePayrollDto {
  @ApiProperty()
  employee_id: string;
  @ApiProperty()
  department_id: string;
  @ApiProperty()
  date: Date;
  @ApiProperty()
  amount: number;
}
