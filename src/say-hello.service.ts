import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
@Injectable()
export class SayHelloService {
  sayHelloTo(someone: string): string {
    return 'Hello ' + someone;
  }
}
