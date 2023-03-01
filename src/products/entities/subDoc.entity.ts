import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class SubDoc {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
}
