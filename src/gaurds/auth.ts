import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwt: JwtService) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request = ctx.switchToHttp().getRequest<Request>();
    if (!request.headers.authorization) {
      throw new UnauthorizedException();
    }
    const token = request.headers.authorization.split(' ')[1];

    const payload = await this.jwt.verifyAsync(token, {
      secret: 'secret',
    });
    if (!payload) {
      throw new UnauthorizedException();
    }
    request['user'] = payload;
    return true;
  }
}
