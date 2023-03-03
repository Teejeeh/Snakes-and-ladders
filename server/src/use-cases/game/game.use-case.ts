import { Injectable } from '@nestjs/common';
import { Game } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';

@Injectable()
export class GameUseCases {
  constructor(private dataServices: IDataServices) {}

  getAllGames(): Promise<Game[]> {
    return this.dataServices.games.getAll();
  }

  getGameById(id: any): Promise<Game> {
    return this.dataServices.games.get(id);
  }

  async createGame(game: Game): Promise<Game> {
    try {
      // call to our dependencies
      const createdGame = await this.dataServices.games.create(game);

      return createdGame;
    } catch (error) {
      throw error;
    }
  }

  updateGame(gameId: string, game: Game): Promise<Game> {
    return this.dataServices.games.update(gameId, game);
  }
}
