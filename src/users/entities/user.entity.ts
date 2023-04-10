import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;

  toEntity(dto: CreateUserDto): User {
    const entity = new User();
    entity.id = dto.id;
    entity.name = dto.name;
    entity.email = dto.email;
    return entity;
  }
}
