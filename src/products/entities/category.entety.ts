import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', unique: true })
  name: string;
  @Column({ type: 'text' })
  description: string;
  @Column({ type: 'varchar' })
  image: string;
}
