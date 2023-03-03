import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type BoardDocument = BoardItem & Document;

@Schema()
export class BoardItem {
    @Prop()
    begin: number;

    @Prop()
    end: number;
}

export const BoardSchema = SchemaFactory.createForClass(BoardItem);
