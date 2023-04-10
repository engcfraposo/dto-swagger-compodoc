import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateUserDto } from "../dto/create-user.dto";
import { ValidatateErrors } from "../dto/valdate-errors.dto";
import { applyDecorators } from "@nestjs/common";

export function SwaggerPostUser() {
  return applyDecorators(
    ApiOperation({
      summary: 'Create a new user',
      description: 'This endpoint is responsible to create a new user',
    }),
    ApiResponse({
      status: 201,
      description: 'The record has been successfully created.',
      type: CreateUserDto,
    }),
    ApiResponse({
      status: 403,
      description: 'Forbidden.',
      type: ValidatateErrors,
    }),
  );
}
