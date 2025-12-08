import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { CoreModule } from './core/core.module';
import { ConfigService } from '@nestjs/config';
import fastifyCookie from '@fastify/cookie';
import secureSession from '@fastify/secure-session';
import { ValidationPipe } from '@nestjs/common';
import { parseBoolean, ums } from './shared/utils';
import { StringValue } from 'ms';
// import { RedisService } from './core/redis/redis.service';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    CoreModule,
    new FastifyAdapter({ logger: true }),
  );

  const config = app.get(ConfigService);
  // const redis = app.get(RedisService);

  await app.register(fastifyCookie, {
    secret: config.getOrThrow<string>('COOKIES_SECRET'),
  });

  await app.register(secureSession, {
    secret: config.getOrThrow<string>('SESSIONS_SECRET'),
    salt: config.getOrThrow<string>('SESSIONS_SALT'),
    cookie: {
      domain: config.getOrThrow<string>('SESSIONS_DOMAIN'),
      maxAge: ums(config.getOrThrow<StringValue>('SESSIONS_MAX_AGE')),
      httpOnly: parseBoolean(config.getOrThrow<string>('SESSIONS_HTTP_ONLY')),
      secure: parseBoolean(config.getOrThrow<string>('SESSIONS_SECURE')),
      sameSite: 'lax',
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableCors({
    origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
    credentials: true,
    exposedHeaders: ['set-cookie'],
  });

  await app.listen(config.getOrThrow<number>('BACKEND_PORT'), '0.0.0.0');
}
void bootstrap();
