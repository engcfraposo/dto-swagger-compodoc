import { ApiProperty } from "@nestjs/swagger";

export class ValidatateErrors {
  @ApiProperty({ example: 400 })
  statusCode: number;
  @ApiProperty({ example: 'Bad Request' })
  error: string;
  @ApiProperty({ type: [String], example: ['email must be an email'] })
  message: string[];
}
