import { PartialType } from '@nestjs/mapped-types';
import { SignupDto } from './signup-dto.ts/signup-dto';

export class LoginDto extends PartialType(SignupDto) {
  email: string;
  password: string;
}
