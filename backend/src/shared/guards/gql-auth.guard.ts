import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { GqlContext } from '../types/gql-context.types';

@Injectable()
export class GqlAuthGuard implements CanActivate {
  public constructor(private readonly prismaService: PrismaService) {}
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext<GqlContext>();

    if (typeof ctx.req.session.userId === 'undefined') {
      throw new UnauthorizedException('User is not authorized');
    }

    ctx.req.user = await this.prismaService.user.findUnique({
      where: {
        id: ctx.req.session.userId,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        email: true,
        password: true,
        username: true,
        displayName: true,
        avatar: true,
        bio: true,
      },
    });

    return true;
  }
}
