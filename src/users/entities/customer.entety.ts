// import { SubDocSchema, SubDoc } from 'src/products/entities/subDoc.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', unique: true })
  name: string;
  @Column({ type: 'varchar' })
  lastName: string;
  @Column({ type: 'varchar' })
  phone: string;
  // @Prop({
  //   type: [{ name: { type: String }, color: { type: String } }],
  // })
  // skills: Types.Array<Record<string, any>>;
  // @Prop({ type: [SubDocSchema] })
  // subDocs: Types.Array<SubDoc>;
  //El subdoc es un ejemplo de como tipar las relaciones( en este caso uno a muchos, el tipado es de un array con objetos, las skills lo podrian usar)
}
