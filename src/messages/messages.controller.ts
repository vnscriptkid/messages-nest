import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './create-message-dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getAll() {
    return 'all messages';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    console.log(id, typeof id);
    return 'one message';
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    console.log({ createMessageDto });
    return 'create a new message';
  }
}
