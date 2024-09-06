import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dtos/signup-dto.ts/signup-dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dtos/login-dto';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private readonly userService: UsersService,
  ) {}
  async login(user: LoginDto) {
    const foundUser = await this.userService.findOneByEmail(user.email);
    console.log(foundUser);

    if (!foundUser) {
      throw new NotFoundException();
    }

    const isMatch = await bcrypt.compare(user.password, foundUser.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }
    return foundUser;
  }

  async signup(user: SignupDto) {
    const storedUser = await this.userService.findOneByEmail(user.email);
    if (storedUser) {
      throw new ConflictException();
    }

    const saltKey = await bcrypt.genSalt(6);
    const hashedPassword = await bcrypt.hash(user.password, saltKey);

    const newUser: SignupDto = {
      username: user.username,
      password: hashedPassword,
      email: user.email,
      age: user.age,
    };

    const createdUser = this.userService.create(newUser);
    return createdUser;
  }

  generateToken(data: any) {
    const token = this.jwt.signAsync(
      {
        user: data,
      },
      { secret: 'secret' },
    );

    return token;
  }
}
