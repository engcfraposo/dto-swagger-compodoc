import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserMapper {
  toDTO(entity: User): CreateUserDto {
    const dto = new CreateUserDto();
    dto.id = entity.id;
    dto.name = entity.name;
    dto.email = entity.email;
    return dto;
  }

  toEntity(dto: CreateUserDto | UpdateUserDto): User {
    const entity = new User();
    entity.id = dto.id ? dto.id : null;
    entity.name = dto.name;
    entity.email = dto.email;
    return entity;
  }
}
