import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Employee {
  @Prop({
    type: String,
  })
  name: string;

  @Prop({
    type: String,
  })
  address: string;

  @Prop({
    type: String,
  })
  email: string;

  @Prop({
    type: Number,
  })
  phone: number;

  @Prop({
    type: String,
  })
  gender: string;
}

//employee schema instance
export const employeeSchema = SchemaFactory.createForClass(Employee);

/*list of mongo db data type
   String 
   Integer
   Double
   Boolean
   Array;
   etc...
*/
