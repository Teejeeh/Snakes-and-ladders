import { Game } from '../entities';

export class ThrowResponseDto {
  success: boolean;

  createdGame: Game;
}
