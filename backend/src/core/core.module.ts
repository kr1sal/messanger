import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
// import { GRAPHQL_PREFIX } from 'src/shared/utils';
// import { join } from 'path';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      graphiql: true,
      // path: GRAPHQL_PREFIX,
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // context: ({ req, res }) => ({ req, res }),
      autoSchemaFile: true,
      sortSchema: true,
    }),
    PrismaModule,
    RedisModule,
  ],
})
export class CoreModule {}
