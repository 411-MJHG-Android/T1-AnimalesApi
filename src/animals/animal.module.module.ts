import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { AnimalsController } from './animals.controller.controller';
import { AnimalsService } from './animals.service.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Animal
        ])
    ],
    controllers: [AnimalsController],
    providers: [AnimalsService]
})
export class AnimalModule {}
