import { BoardItem } from "./boardItem.model";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BoardDocument = BoardItem & Document;

@Schema()
export class Ladder extends BoardItem {}

export const BoardSchema = SchemaFactory.createForClass(BoardItem);
