import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { Repository } from 'typeorm';
import { CreateAnimalDto, UpdateAnimalDto } from './dto/animal.dto';
import { retry } from 'rxjs';

@Injectable()
export class AnimalsService {
    constructor(
        @InjectRepository(Animal)
        private animalRepository: Repository<Animal>
    ){}

    //GET
    async getAllAnimals() : Promise<Animal[]>{
        const animals = await this.animalRepository.find();
        return animals;
    }
    //GET BY ID
    async getAnimalById(id: number): Promise<Animal> {
        const animal = await this.animalRepository.findOne({
            where: { id }
        });
        if(!animal){
            //POR SI NO ENCUENTRA EL ID
            throw new NotFoundException('Animal con id ${id} no encontrado')
        }
        return animal;
    }

    //CREATE
    async createAnimal(dto:CreateAnimalDto) : Promise<Animal>{
        const newAnimal = this.animalRepository.create({
            nombre: dto.nombre,
            especie: dto.especie,
            raza: dto.raza,
            edad: dto.edad,
            peso: dto.peso
        });
        const animal = await this.animalRepository.save(newAnimal);
        return animal;
    }

    //UPDATE
    async updateAnimal(id: number, dto: UpdateAnimalDto): Promise<Animal>{
        const animal = await this.getAnimalById(id);

        if (dto.nombre !== undefined) animal.nombre = dto.nombre;
        if (dto.especie !== undefined) animal.especie = dto.especie;
        if (dto.raza !== undefined) animal.raza = dto.raza;
        if (dto.edad !== undefined) animal.edad = dto.edad;
        if (dto.peso !== undefined) animal.peso = dto.peso;

       const updateedAnimal = await this.animalRepository.save(animal);
       return updateedAnimal;
    }

    //DELETE
    async deleteAnimal(id: number): Promise<Animal> {
        const animal = await this.getAnimalById(id);
        await this.animalRepository.delete(id);
        return animal;
    }
}

