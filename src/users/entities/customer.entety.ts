import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { SubDocSchema, SubDoc } from 'src/products/entities/subDoc.entity';

@Schema()
export class Customer extends Document {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  lastName: string;
  @Prop()
  phone: string;
  @Prop({
    type: [{ name: { type: String }, color: { type: String } }],
  })
  skills: Types.Array<Record<string, any>>;
  @Prop({ type: [SubDocSchema] })
  subDocs: Types.Array<SubDoc>;
  //El subdoc es un ejemplo de como tipar las relaciones( en este caso uno a muchos, el tipado es de un array con objetos, las skills lo podrian usar)
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
