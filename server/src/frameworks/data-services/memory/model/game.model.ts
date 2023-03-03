import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Board } from './';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop()
  id: string;

  @Prop()
  dice: number;

  @Prop()
  players: number;

  @Prop()
  turns: Array<Object>;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Board', required: true })
  board: Board;

  @Prop()
  gameover: Boolean;
}

export const GameSchema = SchemaFactory.createForClass(Game);
