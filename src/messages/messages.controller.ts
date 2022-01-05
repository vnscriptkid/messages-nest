import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
  create(@Body() body: any) {
    console.log({ body });
    return 'create a new message';
  }
}
