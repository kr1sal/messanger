import 'fastify';
import type { AuthUser } from './auth-user.types';

declare module 'fastify' {
  interface FastifyRequest {
    user: AuthUser | null;
  }
}
