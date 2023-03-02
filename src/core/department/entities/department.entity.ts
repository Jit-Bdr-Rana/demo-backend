import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class SalaryRange {
  @Prop({ required: true })
  min: number;

  @Prop({ required: true })
  max: number;
}
@Schema()
export class Department {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: String,
  })
  description: string;

  @Prop({
    type: {
      min: { type: Number },
      max: { type: Number },
    },
    exclude: ['_id'],
  })
  salary_range: { min: number; max: number };
}

export const departmentSchema = SchemaFactory.createForClass(Department);
