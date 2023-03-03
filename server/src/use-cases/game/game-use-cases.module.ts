import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { GameFactoryService } from './game-factory.service';
import { GameUseCases } from './game.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [GameFactoryService, GameUseCases],
  exports: [GameFactoryService, GameUseCases],
})
export class GameUseCasesModule {}
