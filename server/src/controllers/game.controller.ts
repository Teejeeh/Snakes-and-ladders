import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateGameDto, UpdateGameDto, CreateGameResponseDto, ThrowDto } from '../core/dtos';
import { GameUseCases, GameFactoryService } from '../use-cases/game';

@Controller('api/game')
export class GameController {
  constructor(
    private gameUseCases: GameUseCases,
    private gameFactoryService: GameFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.gameUseCases.getAllGames();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.gameUseCases.getGameById(id);
  }

  @Post('/throw')
  async throw() : Promise<UpdateGameDto> {
    const gameId = '6400ce3e6ea611f72aa5a18e';
    const game = await this.getById(gameId);

    // add throw
    const new_throw = this.gameFactoryService.throw(game);
    game.turns.push(new_throw)

    return this.gameUseCases.updateGame(gameId, game);
  }

  @Post()
  async createGame(@Body() gameDto: CreateGameDto) : Promise<CreateGameResponseDto> {
    const createGameResponse = new CreateGameResponseDto();
    try {
      const game = this.gameFactoryService.createNewGame(gameDto);
      const createdGame = await this.gameUseCases.createGame(game);

      createGameResponse.success = true;
      createGameResponse.createdGame = createdGame;
    } catch (error) {
      // report and log error
      createGameResponse.success = false;
    }

    return createGameResponse;
  }

  @Put(':id')
  updateGame(
    @Param('id') gameId: string,
    @Body() updateGameDto: UpdateGameDto,
  ) {
    const game = this.gameFactoryService.updateGame(updateGameDto);
    return this.gameUseCases.updateGame(gameId, game);
  }
}
