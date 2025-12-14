import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserModel } from 'prisma/generated/models';
import type { FastifyRequest } from 'fastify';
import { GqlContext } from '../types/gql-context.types';

export const Authorized = createParamDecorator(
  (data: keyof UserModel, ctx: ExecutionContext) => {
    let user: UserModel | null = null;

    if (ctx.getType() === 'http') {
      user = ctx.switchToHttp().getRequest<FastifyRequest>().user;
    } else {
      const context = GqlExecutionContext.create(ctx);
      user = context.getContext<GqlContext>().req.user;
    }

    if (!user) {
      throw new Error('User not authorized');
    }

    return data ? user[data] : user;
  },
);
