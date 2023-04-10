import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserMapper } from './mapper/user.mapper';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly userMapper: UserMapper,
  ) {}
  async create(updateUserDto: UpdateUserDto) {
    const entity = this.userMapper.toEntity(updateUserDto);
    const user = await this.userRepository.save(entity);
    return this.userMapper.toDTO(user);
  }

  async findAll() {
    const listUser = await this.userRepository.find();
    return listUser.map((user) => this.userMapper.toDTO(user));
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return this.userMapper.toDTO(user);
  }
}
