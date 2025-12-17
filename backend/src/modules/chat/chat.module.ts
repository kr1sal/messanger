import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatResolver } from './chat.resolver';
import { UserModule } from '../user/user.module';

@Module({
  providers: [ChatResolver, ChatService],
  imports: [UserModule],
})
export class ChatModule {}
