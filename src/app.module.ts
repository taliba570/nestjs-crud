import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './modules/cat/cat.module';
import { DogModule } from './modules/dog/dog.module';
import { GoatModule } from './modules/goat/goat.module';
import { OrcaModule } from './modules/orca/orca.module';

@Module({
  imports: [CatModule, DogModule, GoatModule, OrcaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
