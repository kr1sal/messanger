/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';
import { join } from 'node:path';
import { AccountModule } from 'src/modules/auth/account/account.module';
import { SessionModule } from 'src/modules/auth/session/session.module';
import { ChatModule } from 'src/modules/chat/chat.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      context: (req, res) => ({ req, res }),
      graphiql: true,
      sortSchema: true,
      installSubscriptionHandlers: true,
    }),
    PrismaModule,
    RedisModule,
    AccountModule,
    SessionModule,
    ChatModule,
    UserModule,
  ],
})
export class CoreModule {}
