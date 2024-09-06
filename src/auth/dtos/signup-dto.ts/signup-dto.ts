import { IsEmail, IsNotEmpty, IsStrongPassword, Length } from 'class-validator';

export class SignupDto {
  @IsNotEmpty()
  @Length(5, 25)
  username: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}
