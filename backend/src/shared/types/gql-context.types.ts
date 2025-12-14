import type { FastifyRequest, FastifyReply } from 'fastify';

export interface GqlContext {
  req: FastifyRequest;
  res: FastifyReply;
}
