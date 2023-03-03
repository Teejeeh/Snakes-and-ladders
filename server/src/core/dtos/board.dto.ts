import { IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Snake, Ladder } from '../entities';

export class CreateBoardDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  img: String;

  @IsNotEmpty()
  base: number;

  @IsNotEmpty()
  snakes: Array<Snake>;

  @IsNotEmpty()
  ladders: Array<Ladder>;
}

export class UpdateBoardDto extends PartialType(CreateBoardDto) {}
