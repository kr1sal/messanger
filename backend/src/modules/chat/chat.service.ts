import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ChatSettingsInput } from './inputs/chat-settings.input';
import { UserService } from '../user/user.service';

@Injectable()
export class ChatService {
  public constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  public async createPersonal(
    initiatorId: string,
    userId: string,
    chatSettingsInput: ChatSettingsInput,
  ) {
    const initiator = await this.prismaService.user.findUnique({
      where: { id: initiatorId },
    });

    if (!initiator) {
      throw new NotFoundException('User not found!');
    }

    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return await this.prismaService.chat.create({
      data: {
        ...chatSettingsInput,
        members: {
          createMany: {
            data: [{ userId: initiatorId }, { userId: userId }],
          },
        },
      },
    });
  }

  public async findByUser(userId: string) {
    const user = await this.prismaService.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        chats: true,
      },
    });
  }

  public async sendMessage(senderId: string, chatId: string, text: string) {
    const isChatExists = await this.prismaService.chat.findUnique({
      where: {
        id: chatId,
      },
    });

    if (!isChatExists) {
      throw new NotFoundException('Chat not found!');
    }

    const isMember = await this.prismaService.member.findFirst({
      where: {
        userId: senderId,
        chatId: chatId,
      },
    });

    if (!isMember) {
      throw new ForbiddenException('User is not a chat member');
    }

    return await this.prismaService.message.create({
      data: {
        sender: {
          connect: {
            id: senderId,
          },
        },
        chat: {
          connect: {
            id: chatId,
          },
        },
        text: text,
      },
    });
  }

  public async findMessages(chatId: string) {
    return await this.prismaService.chat.findUnique({
      where: {
        id: chatId,
      },
      include: {
        messages: {
          orderBy: { createdAt: 'desc' },
          include: {
            sender: { select: { id: true, displayName: true, avatar: true } },
          },
        },
      },
    });
  }

  // public async changeSettings(
  //   chatId: string,
  //   chatSettingsInput: ChatSettingsInput,
  // ) {
  //   return await this.prismaService.chat.update({
  //     data: chatSettingsInput,
  //     where: {
  //       id: chatId,
  //     },
  //   });
  // }

  // public async addMember(userId: string, chatId: string) {
  //   const user = await this.prismaService.user.findUnique({
  //     where: { id: userId },
  //   });

  //   if (!user) {
  //     throw new NotFoundException('User not found!');
  //   }

  //   const chat = await this.prismaService.chat.findUnique({
  //     where: { id: chatId },
  //   });

  //   if (!chat) {
  //     throw new NotFoundException('Chat not found!');
  //   }

  //   await this.prismaService.member.create({
  //     data: {
  //       user: {
  //         connect: { id: userId },
  //       },
  //       chat: {
  //         connect: { id: chatId },
  //       },
  //     },
  //   });

  // return await this.prismaService.chat.update();
  // }
}
