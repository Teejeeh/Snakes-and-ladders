import { Board, Game } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract boards: IGenericRepository<Board>;

  abstract games: IGenericRepository<Game>;

}
