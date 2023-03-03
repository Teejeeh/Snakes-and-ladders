import { Board } from "./board.entity";

export class Game {
  id: string;
  dice: number;
  players: number;
  turns: Array<Object>;
  board: Board;
  gameover: Boolean;
}
