import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './dtos/signup-dto.ts/signup-dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dtos/login-dto';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() user: LoginDto) {
    const loggedUser = await this.authService.login(user);
    const token = await this.authService.generateToken(loggedUser);
    return { status: 'success', user: loggedUser, token };
  }

  @Post('signup')
  async Signup(@Body() user: SignupDto) {
    const newUser = await this.authService.signup(user);
    const token = await this.authService.generateToken(newUser);
    return { status: 'success', user: newUser, token };
  }
}
