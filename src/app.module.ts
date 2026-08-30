import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/data-source';
import { AnimalsService } from './animals/animals.service.service';
import { AnimalModule } from './animals/animal.module.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    AnimalModule
  ],
  controllers: [AppController],
  providers: [AppService, /*AnimalsService*/],
})
export class AppModule {}
