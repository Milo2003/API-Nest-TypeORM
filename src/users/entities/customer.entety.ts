import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Order } from './order.entety';

import { User } from './user.entety';
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
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
  @OneToOne(() => User, (user) => user.customer, { nullable: true })
  user: User;
  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[];
}
