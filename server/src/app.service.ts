import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getThrows(): Array<number> {
    const diceRoll1 = Math.floor(Math.random() * 6) + 1;
    const diceRoll2 = Math.floor(Math.random() * 6) + 1;
    return [diceRoll1, diceRoll2]
  }
}
