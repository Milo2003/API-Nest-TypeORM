// import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
// import { Document, Types } from 'mongoose';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

// import { Brand } from './brand.entety';
// import { SubDoc, SubDocSchema } from './subDoc.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  // @Prop({ required: true })
  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;
  // @Prop()
  @Column({ type: 'text' })
  description: string;
  // @Prop({ type: Number, index: true })
  @Column({ type: 'int' })
  price: number;
  // @Prop({ type: Number })
  @Column({ type: 'int' })
  stock: number;
  // @Prop()
  @Column({ type: 'varchar' })
  image?: string;
  // @Prop(
  //   raw({
  //     name: { type: String },
  //     description: { type: String },
  //     image: { type: String },
  //   }),
  // )

  // category: Record<string, any>;
  // @Prop({ type: Types.ObjectId, ref: Brand.name })
  // brand: Brand | Types.ObjectId;
  // //subDoc

  // @Prop({ type: SubDocSchema })
  // subDoc: SubDoc;

  // //Para relaciones 1 a muchos
  // // @Prop({ type: [SubDocSchema] })
  // // subDocs: Types.Array<SubDoc>;
}

// export const ProductSchema = SchemaFactory.createForClass(Product);
// ProductSchema.index({ price: 1, stock: -1 });
