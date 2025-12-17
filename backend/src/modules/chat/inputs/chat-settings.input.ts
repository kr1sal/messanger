import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class ChatSettingsInput {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  public displayName: string;

  @Field(() => String)
  @IsString()
  public logo: string;

  @Field(() => String)
  @IsString()
  public description: string;
}
