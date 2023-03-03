import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateBoardDto, UpdateBoardDto } from '../core/dtos';
import { BoardUseCases } from '../use-cases/board/board.use-case';

@Controller('api/board')
export class BoardController {
  constructor(private boardUseCases: BoardUseCases) {}

  @Get()
  async getAll() {
    return this.boardUseCases.getAllBoards();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.boardUseCases.getBoardById(id);
  }

  @Post()
  createBoard(@Body() boardDto: CreateBoardDto) {
    return this.boardUseCases.createBoard(boardDto);
  }

  @Put(':id')
  updateBoard(
    @Param('id') boardId: string,
    @Body() updateBoardDto: UpdateBoardDto,
  ) {
    return this.boardUseCases.updateBoard(boardId, updateBoardDto);
  }
}
