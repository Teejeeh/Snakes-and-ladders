import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Ladder } from './ladder.model';
import { Snake } from './snake.model';

export type BoardDocument = Board & Document;

@Schema()
export class Board {
  
  @Prop()
  id: number;

  @Prop()
  img: String;

  @Prop()
  base: number;

  @Prop()
  snakes: Array<Snake>;

  @Prop()
  ladders: Array<Ladder>;
}

export const BoardSchema = SchemaFactory.createForClass(Board);
