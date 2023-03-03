import { IsNotEmpty } from 'class-validator';

export class ThrowDto {
  @IsNotEmpty()
  dice: Array<number>

  @IsNotEmpty()
  destination: number
  
  @IsNotEmpty()
  hit: String
}
