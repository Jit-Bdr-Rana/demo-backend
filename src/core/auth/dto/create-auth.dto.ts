import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthDto {
  @ApiProperty({ default: 'jit@gmail.com' })
  email: string;
  @ApiProperty({ default: 'jit' })
  password: string;
}
