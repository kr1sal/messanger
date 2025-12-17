import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ChatModel } from 'src/modules/chat/models/chat.model';
import { MemberModel } from 'src/modules/chat/models/member.model';
import { MessageModel } from 'src/modules/chat/models/message.model';

@ObjectType()
export class UserModel {
  @Field(() => ID)
  public id: string;

  @Field(() => Date)
  public createdAt: Date;
  @Field(() => Date)
  public updatedAt: Date;

  @Field(() => String)
  public username: string;
  @Field(() => String)
  public displayName: string;
  @Field(() => String)
  public avatar: string;
  @Field(() => String)
  public bio: string;

  @Field(() => [ChatModel])
  public chats: ChatModel[];
  @Field(() => [MemberModel])
  public members: MemberModel[];
  @Field(() => [MessageModel])
  public messages: MessageModel[];
}
