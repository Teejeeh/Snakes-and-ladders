import { IsNotEmpty, IsNumber } from 'class-validator';

export class ThrowDTO {
  @IsNumber()
  @IsNotEmpty()
  current: Number;
}
