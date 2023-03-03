import { Injectable } from '@nestjs/common';
import { Board } from '../../core/entities';
import { CreateBoardDto, UpdateBoardDto } from '../../core/dtos';

@Injectable()
export class BoardFactoryService {
  createNewBoard(createBoardDto: CreateBoardDto) {
    const newBoard = new Board();
    newBoard.base = createBoardDto.base;
    newBoard.snakes = createBoardDto.snakes;
    newBoard.ladders = createBoardDto.ladders;

    return newBoard;
  }

  updateBoard(updateBoardDto: UpdateBoardDto) {
    const newBoard = new Board();
    newBoard.base = updateBoardDto.base;
    newBoard.snakes = updateBoardDto.snakes;
    newBoard.ladders = updateBoardDto.ladders;

    return newBoard;
  }
}
