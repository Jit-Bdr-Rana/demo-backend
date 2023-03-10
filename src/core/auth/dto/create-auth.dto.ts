import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({ default: 'email@gmail.com' })
  email: string;
  @ApiProperty({ default: 'password' })
  password: string;
}
