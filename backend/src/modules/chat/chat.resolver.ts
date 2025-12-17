import { Args, Mutation, Resolver, Query, Subscription } from '@nestjs/graphql';
import { ChatService } from './chat.service';
import { PubSub } from 'graphql-subscriptions';
import { Authorized } from 'src/shared/decorators/authorized.decorator';
import { ChatSettingsInput } from './inputs/chat-settings.input';
import { Authorization } from 'src/shared/decorators/authorization.decorator';
import { ChatModel } from './models/chat.model';
import { MessageModel } from './models/message.model';
import { MessageSendedPayload } from './interfaces/message-sended.interface';

@Resolver('Chat')
export class ChatResolver {
  private readonly pubSub: PubSub;

  constructor(private readonly chatService: ChatService) {
    this.pubSub = new PubSub();
  }

  @Authorization()
  @Mutation(() => ChatModel, { name: 'createPersonalChat' })
  public async createPersonal(
    @Authorized('id') initiatorId: string,
    @Args('userId') userId: string,
    @Args('data') data: ChatSettingsInput,
  ) {
    return await this.chatService.createPersonal(initiatorId, userId, data);
  }

  @Authorization()
  @Query(() => [ChatModel], { name: 'findChatsByUser' })
  public async findByUser(@Authorized('id') userId: string) {
    return await this.chatService.findByUser(userId);
  }

  @Authorization()
  @Mutation(() => MessageModel, { name: 'sendChatMessage' })
  public async sendMessage(
    @Authorized('id') userId: string,
    @Args('chatId') chatId: string,
    @Args('text') text: string,
  ) {
    const message = await this.chatService.sendMessage(userId, chatId, text);

    await this.pubSub.publish('MESSAGE_SENDED', { message });

    return message;
  }

  @Subscription(() => ChatModel, {
    name: 'messageSended',
    filter: (payload: MessageSendedPayload, vars: { chatId: string }) =>
      payload.messageSended.chatId === vars.chatId,
  })
  public messageSended() {
    return this.pubSub.asyncIterableIterator('MESSAGE_SENDED');
  }

  @Authorization()
  @Query(() => [MessageModel], { name: 'findChatMessages' })
  public async findMessages(@Args('chatId') chatId: string) {
    return await this.chatService.findMessages(chatId);
  }
}
