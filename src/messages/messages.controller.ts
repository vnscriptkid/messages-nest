import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  getAll() {
    return 'all messages';
  }

  @Get(':id')
  getOne() {
    return 'one message';
  }

  @Post()
  create() {
    return 'create a new message';
  }
}
