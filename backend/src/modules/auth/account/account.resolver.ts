import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AccountService } from './account.service';
import { UserModel } from './models/user.model';
import { CreateUserInput } from './inputs/create-user.input';
import { Authorization } from 'src/shared/decorators/authorization.decorator';
import { Authorized } from 'src/shared/decorators/authorized.decorator';

@Resolver('Account')
export class AccountResolver {
  constructor(private readonly accountService: AccountService) {}

  @Authorization()
  @Query(() => UserModel, { name: 'findUser' })
  public async find(@Authorized('id') id: string) {
    return this.accountService.find(id);
  }

  @Authorization()
  @Query(() => [UserModel], { name: 'findAllUsers' })
  public async findAll() {
    return this.accountService.findAll();
  }

  @Mutation(() => UserModel, { name: 'createUser' })
  public async create(@Args('data') input: CreateUserInput) {
    return this.accountService.create(input);
  }
}
