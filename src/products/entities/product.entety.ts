import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

import { Brand } from './brand.entety';
import { SubDoc, SubDocSchema } from './subDoc.entity';
@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;
  @Prop()
  description: string;
  @Prop({ type: Number, index: true })
  price: number;
  @Prop({ type: Number })
  stock: number;
  @Prop()
  image?: string;
  @Prop(
    raw({
      name: { type: String },
      description: { type: String },
      image: { type: String },
    }),
  )
  category: Record<string, any>;
  @Prop({ type: Types.ObjectId, ref: Brand.name })
  brand: Brand | Types.ObjectId;
  //subDoc
  @Prop({ type: SubDocSchema })
  subDoc: SubDoc;
  //Para relaciones 1 a muchos
  // @Prop({ type: [SubDocSchema] })
  // subDocs: Types.Array<SubDoc>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.index({ price: 1, stock: -1 });
