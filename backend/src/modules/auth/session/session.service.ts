import {
  Injectable,
  NotFoundException,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginInput } from './inputs/login.input';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { verify } from 'argon2';
import type { FastifyRequest } from 'fastify';

@Injectable()
export class SessionService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async login(@Req() request: FastifyRequest, input: LoginInput) {
    const user = await this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            username: { equals: input.login },
          },
          {
            email: { equals: input.login },
          },
        ],
      },
    });

    if (!user) {
      throw new NotFoundException(`User ${input.login} not found!`);
    }

    const isValidPassword = await verify(user.password, input.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Wrong password!');
    }

    request.session.set('userId', user.id);
    request.session.set('createdAt', new Date());
    return user;
  }

  // eslint-disable-next-line @typescript-eslint/require-await
  public async logout(@Req() request: FastifyRequest) {
    request.session.delete();
    console.log(request.cookies);
    return true;
  }
}
