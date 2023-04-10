import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
//import { User } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty({ description: "user's id", required: false })
  id?: number;

  @ApiProperty({ description: "user's name", default: 'Contoso' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: "user's email", default: 'contoso@contoso.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  //toDTO(entity: User): CreateUserDto {
  //const dto = new CreateUserDto();
  //dto.id = entity.id;
  //dto.name = entity.name;
  //dto.email = entity.email;
  //return dto;
  //}
}
