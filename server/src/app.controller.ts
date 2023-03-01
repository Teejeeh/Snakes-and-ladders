import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ThrowDTO, throwResponse } from './core/dtos';
import { Board } from './core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('throw')
  throw(@Body() throwDTO: ThrowDTO): throwResponse {
    const board = new Board();

    let gameOver = false;
    const current = Number(throwDTO.current);
    const diceRolls: Array<number> = this.appService.getThrows();

    // calculate destination
    let destination = [current, ...diceRolls].reduce(
      (partialSum, a) => partialSum + a,
      0,
    );

    // check hit for ladder or snake
    let hit = null;
    let specialDestination = board.checkHit(destination);

    if (specialDestination) {
      hit = specialDestination > destination ? 'ladder' : 'snake';
      destination = specialDestination;
    }

    // check finish
    if (destination > 35) destination = 36
    const response = {
      current,
      diceRolls,
      destination,
      hit,
      gameOver,
    }

    return response;
  }
}
