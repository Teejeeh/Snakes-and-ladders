import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

import { IDataServices } from '../../../core';
import { MemoryGenericRepository } from './memory-generic-repository';
import {
  Board,
  BoardDocument,
  Game,
  GameDocument,
} from './model';

@Injectable()
export class MemoryDataServices
  implements IDataServices, OnApplicationBootstrap
{
  boards: MemoryGenericRepository<Board>;
  games: MemoryGenericRepository<Game>;

  constructor(
    // @InjectModel(Board.name)
    // private BoardRepository: Model<BoardDocument>,
    // @InjectModel(Game.name)
    // private GameRepository: Model<GameDocument>,
  ) {}

  onApplicationBootstrap() {
    // this.boards = new MemoryGenericRepository<Board>(this.BoardRepository);
    // this.games = new MemoryGenericRepository<Game>(this.GameRepository, [
    //   'board',
    // ]);
  }
}
