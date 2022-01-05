import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getAll() {
    return 'all messages';
  }
}
