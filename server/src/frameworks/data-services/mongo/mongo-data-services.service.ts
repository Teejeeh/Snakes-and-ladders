import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  Board,
  BoardDocument,
  Game,
  GameDocument,
} from './model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  boards: MongoGenericRepository<Board>;
  games: MongoGenericRepository<Game>;

  constructor(
    @InjectModel(Board.name)
    private BoardRepository: Model<BoardDocument>,
    @InjectModel(Game.name)
    private GameRepository: Model<GameDocument>,
  ) {}

  onApplicationBootstrap() {
    this.boards = new MongoGenericRepository<Board>(this.BoardRepository);
    this.games = new MongoGenericRepository<Game>(this.GameRepository, [
      'board',
    ]);
  }
}
