import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { BoardFactoryService } from './board-factory.service';
import { BoardUseCases } from './board.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [BoardFactoryService, BoardUseCases],
  exports: [BoardFactoryService, BoardUseCases],
})
export class BoardUseCasesModule {}
