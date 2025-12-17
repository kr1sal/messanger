import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserModel } from 'src/modules/user/models/user.model';
import { ChatModel } from './chat.model';

@ObjectType()
export class MemberModel {
  @Field(() => ID)
  public id: string;

  @Field(() => Date)
  public createdAt: Date;
  @Field(() => Date)
  public updatedAt: Date;

  @Field(() => String)
  public userId: string;
  @Field(() => UserModel)
  public user: UserModel;

  @Field(() => String)
  public chatId: string;

  @Field(() => ChatModel)
  public chat: ChatModel;
}
