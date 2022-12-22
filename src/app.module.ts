import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SayHelloService } from './say-hello.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), CacheModule.register({ isGlobal: true })],
  controllers: [AppController],
  providers: [SayHelloService],
})
export class AppModule {}
