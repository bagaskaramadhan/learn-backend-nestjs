import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users_tb')
export class User {
  @PrimaryColumn({ name: 'id' })
  id: string;

  @Column({ name: 'name' })
  name: string;
}
