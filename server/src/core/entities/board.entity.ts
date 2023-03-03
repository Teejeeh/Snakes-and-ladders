import { Ladder } from './ladder.entity';
import { Snake } from './snake.entity';

export class Board {
  id: number;
  img: String;
  base: number;
  snakes: Array<Snake>;
  ladders: Array<Ladder>;
}
