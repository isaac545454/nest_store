import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user',
})
export class User {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ nullable: true, name: 'name' })
  name: string;

  @Column({ nullable: true, name: 'email' })
  email: string;

  @Column({ nullable: true, name: 'phone' })
  phone: string;

  @Column({ nullable: false, name: 'cpf' })
  cpf: string;

  @Column({ nullable: false, name: 'password' })
  password: string;
}
