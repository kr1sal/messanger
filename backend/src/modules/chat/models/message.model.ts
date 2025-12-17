import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserModel } from 'src/modules/user/models/user.model';
import { ChatModel } from './chat.model';

@ObjectType()
export class MessageModel {
  @Field(() => ID)
  public id: string;

  @Field(() => Date)
  public createdAt: Date;
  @Field(() => Date)
  public updatedAt: Date;

  @Field(() => String)
  public senderId: string;
  @Field(() => UserModel)
  public sender: UserModel;

  @Field(() => String)
  public chatId: string;

  @Field(() => ChatModel)
  public chat: ChatModel;
}
