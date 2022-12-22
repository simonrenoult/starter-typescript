import { Controller, Get, Param, Post } from '@nestjs/common';
import { SayHelloService } from './say-hello.service';

@Controller()
export class AppController {
  constructor(private readonly sayHelloService: SayHelloService) {}

  @Get('/hello/:someone')
  sayHello(@Param('someone') someone: string): string {
    return this.sayHelloService.sayHelloTo(someone);
  }
}
