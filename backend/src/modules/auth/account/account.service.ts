import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateUserInput } from './inputs/create-user.input';
import { hash } from 'argon2';

@Injectable()
export class AccountService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async find(id: string) {
    return await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  public async findAll() {
    return await this.prismaService.user.findMany();
  }

  public async create(input: CreateUserInput) {
    const isUsernameAlreadyExists = await this.prismaService.user.findUnique({
      where: {
        username: input.username,
      },
    });

    const isEmailAlreadyExists = await this.prismaService.user.findUnique({
      where: {
        username: input.email,
      },
    });

    if (isUsernameAlreadyExists) {
      throw new ConflictException(`Username ${input.username} already exists!`);
    }

    if (isEmailAlreadyExists) {
      throw new ConflictException(`Email ${input.email} already exists!`);
    }

    return await this.prismaService.user.create({
      data: {
        email: input.email,
        password: await hash(input.password),
        username: input.username,
        displayName: input.username,
      },
    });
  }
}
