import { ApiProperty } from '@nestjs/swagger';

//input data that might come from frontend
export class CreateEmployeeDto {
  @ApiProperty() //just for swagger api documentation
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: number;

  @ApiProperty()
  age: number;

  @ApiProperty()
  gender: number;
}
