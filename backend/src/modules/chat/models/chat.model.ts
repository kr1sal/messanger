import { Field, ID, ObjectType } from '@nestjs/graphql';
import { MemberModel } from './member.model';
import { MessageModel } from './message.model';

@ObjectType()
export class ChatModel {
  @Field(() => ID)
  public id: string;

  @Field(() => Date)
  public createdAt: Date;
  @Field(() => Date)
  public updatedAt: Date;

  @Field(() => String)
  public displayName: string;

  @Field(() => String, { nullable: true })
  public logo: string;
  @Field(() => String, { nullable: true })
  public description: string;

  @Field(() => [MemberModel])
  public members: MemberModel[];
  @Field(() => [MessageModel])
  public messages: MessageModel[];
}
