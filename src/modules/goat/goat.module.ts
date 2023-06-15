import { Module } from '@nestjs/common';
import { GoatController } from './goat.controller';

@Module({
  controllers: [GoatController],
})
export class GoatModule {}
