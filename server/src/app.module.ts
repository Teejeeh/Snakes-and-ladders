import { Module } from '@nestjs/common';
import {
  AppController,
  GameController,
  BoardController,
} from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { GameUseCasesModule } from './use-cases/game/game-use-cases.module';
import { BoardUseCasesModule } from './use-cases/board/board-use-cases.module';

@Module({
  imports: [
    DataServicesModule,
    GameUseCasesModule,
    BoardUseCasesModule,
  ],
  controllers: [
    AppController,
    GameController,
    BoardController,
  ],
  providers: [],
})
export class AppModule {}
