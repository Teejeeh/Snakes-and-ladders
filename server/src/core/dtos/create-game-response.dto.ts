import { Game } from '../entities';

export class CreateGameResponseDto {
  success: boolean;

  createdGame: Game;
}
