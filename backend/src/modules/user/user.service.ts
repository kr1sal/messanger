import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';

@Injectable()
export class UserService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async findByUsername(username: string) {
    return await this.prismaService.user.findUnique({
      where: {
        username,
      },
    });
  }
}
