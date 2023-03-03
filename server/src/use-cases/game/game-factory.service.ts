import { Injectable } from '@nestjs/common';
import { Game, Throw } from '../../core/entities';
import { CreateGameDto, UpdateGameDto } from '../../core/dtos';

@Injectable()
export class GameFactoryService {
  createNewGame(createGameDto: CreateGameDto): Game {
    const newGame = new Game();
    newGame.dice = createGameDto.dice;
    newGame.players = createGameDto.players;
    newGame.turns = createGameDto.turns;
    newGame.gameover = createGameDto.gameover;
    newGame.board = createGameDto.board;

    return newGame;
  }

  updateGame(updateGameDto: UpdateGameDto): Game {
    const newGame = new Game();
    newGame.dice = updateGameDto.dice;
    newGame.players = updateGameDto.players;
    newGame.turns = updateGameDto.turns;
    newGame.gameover = updateGameDto.gameover;
    newGame.board = updateGameDto.board;

    return newGame;
  }
  throw_dice(amount): Array<number> {
    let dice: Array<number> = [];
    for (let index = 0; index < amount; index++) {
      const diceRoll = Math.floor(Math.random() * 6) + 1;
      dice.push(diceRoll);
    }
    return dice;
  }
  checkHit(board, destination) {
    const snakesHit = board.snakes.filter(snake => snake.begin == destination);
    if (snakesHit.length > 0) return snakesHit[0].end;

    const laddersHit = board.ladders.filter(ladder => ladder.begin == destination);
    if (laddersHit.length > 0) return laddersHit[0].end;

    return undefined;
  }

  current_pos(turns, players){
    const turn = turns.at(-players)
    return turn ? turn.destination : 1
  }


  throw(updateGameDto: UpdateGameDto): Throw {
    const newGame: Game = this.updateGame(updateGameDto);
    const current = this.current_pos(newGame.turns, newGame.players);

    // Roll dice
    const new_dice = this.throw_dice(updateGameDto.dice);
    let destination = [current, ...new_dice].reduce((a, b) => a + b, 0);

    // Check hits
    const specialDest = this.checkHit(newGame.board, destination);

    // Check special hit
    const hit = specialDest != undefined;
    let hitKind = null
    if (hit) hitKind = specialDest > destination ? 'ladder' : 'snake';
    destination = hit ? specialDest : destination;

    const newThrow: Throw = {
      dice: new_dice,
      destination,
      hit: hitKind,
    };

    return newThrow;
  }
}
