import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {
  // Every second
  @Cron('* * * * * *')
  printHelloMessage(): void {
    console.log(new Date(), 'Hello World!');
  }
}
