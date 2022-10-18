import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}

export default User;
