import { IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Board } from '../entities';

export class CreateGameDto {
  @IsNotEmpty()
  id: string
  
  @IsNotEmpty()
  dice: number;

  @IsNotEmpty()
  players: number;

  @IsNotEmpty()
  turns: Array<Object>;

  @IsNotEmpty()
  board: Board;

  @IsNotEmpty()
  gameover: Boolean;
  
}

export class UpdateGameDto extends PartialType(CreateGameDto) {}
