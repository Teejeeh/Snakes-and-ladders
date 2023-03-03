import { Injectable } from '@nestjs/common';
import { Board } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateBoardDto, UpdateBoardDto } from '../../core/dtos';
import { BoardFactoryService } from './board-factory.service';

@Injectable()
export class BoardUseCases {
  constructor(
    private dataServices: IDataServices,
    private boardFactoryService: BoardFactoryService,
  ) {}

  getAllBoards(): Promise<Board[]> {
    return this.dataServices.boards.getAll();
  }

  getBoardById(id: any): Promise<Board> {
    return this.dataServices.boards.get(id);
  }

  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = this.boardFactoryService.createNewBoard(createBoardDto);
    return this.dataServices.boards.create(board);
  }

  updateBoard(
    boardId: string,
    updateBoardDto: UpdateBoardDto,
  ): Promise<Board> {
    const board = this.boardFactoryService.updateBoard(updateBoardDto);
    return this.dataServices.boards.update(boardId, board);
  }
}
