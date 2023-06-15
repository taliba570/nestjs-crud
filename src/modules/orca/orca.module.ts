import { Module } from '@nestjs/common';
import { OrcaController } from './orca.controller';

@Module({
  controllers: [OrcaController],
})
export class OrcaModule {}
