import { Module } from '@nestjs/common';
import { IDataServices } from '../../../core';
import {
  Board,
  BoardSchema,
  Game,
  GameSchema,
} from './model';
import { MemoryDataServices } from './memory-data-services.service';

@Module({
  imports: [

  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MemoryDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MemoryDataServicesModule {}
