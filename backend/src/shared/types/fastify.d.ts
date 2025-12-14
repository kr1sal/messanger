import 'fastify';
import { UserModel } from 'prisma/generated/models';

declare module 'fastify' {
  interface FastifyRequest {
    user: UserModel | null;
  }
}
