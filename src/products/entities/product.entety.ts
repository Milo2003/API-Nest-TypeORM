import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// import { Brand } from './brand.entety';
// import { SubDoc, SubDocSchema } from './subDoc.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'int' })
  price: number;
  @Column({ type: 'int' })
  stock: number;
  @Column({ type: 'varchar' })
  image?: string;
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
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
