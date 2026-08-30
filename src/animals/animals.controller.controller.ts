import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AnimalsService } from './animals.service.service';
import { BodyResponse } from './dto/body-response.dto';
import { CreateAnimalDto, UpdateAnimalDto } from './dto/animal.dto';

@Controller('animals')
export class AnimalsController {
    constructor (
        private animalsService: AnimalsService
    ){}

    @Get()
    async getAllAnimals(){
        const response : BodyResponse = {
            status: 200,
            error: false,
            errorMessage: undefined,
            data: undefined
        }
        try{
            const animals = await this.animalsService.getAllAnimals();
            response.data = animals;
            return response;
        }
        catch(e){
            console.error('Error detallado:', e);
            response.status = 500;
            response.error = true;
            response.errorMessage = "Ocurrrio un error";
            return response;
        }
    }

    //GET ID
    @Get(':id')
    async getAnimalByID(
        @Param('id', ParseIntPipe) id: number
    ){
        const response: BodyResponse = {
            status: 200,
            error: false,
            errorMessage: undefined,
            data: undefined
    };
    try {
        const animal = await this.animalsService.getAnimalById(id);
        response.data = animal;
        return response;
    } catch(e){
            console.error('Error detallado:', e);
            response.status = 500;
            response.error = true;
            response.errorMessage = "Ocurrrio un error";
            return response;
        }
    }

    //CRETE
    @Post()
    async createAnimal(
        @Body() createAnimal: CreateAnimalDto
    ){
        const response: BodyResponse = {
            status: 201,
            error: false,
            errorMessage: undefined,
            data: undefined
        };
        try{
            const animal = await this.animalsService.createAnimal(createAnimal);
            response.data = animal;
            return response;
        } catch(e){
            console.error('Error detallado en createAnimal:', e);
            response.status = 500;
            response.error = true;
            response.errorMessage = "Ocurrio un error";
            return response;
        }
    }

    //UPDATE
    @Patch(':id')
    async updateAnimal(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateAnimalDto: UpdateAnimalDto
    ){
        const response: BodyResponse = {
            status: 200,
            error: false,
            errorMessage: undefined,
            data: undefined
        };
        try {
            const updatedAnimal = await this.animalsService.updateAnimal(id, updateAnimalDto);
            response.data = updatedAnimal;
            return response;
        } catch (e) {
            console.error('Error detallado en updateAnimal:', e);
            response.status = 400;
            response.error = true;
            response.errorMessage = "Ocurrió un error";
            return response;
        }
    }

    //DELETE
    @Delete(':id')
    async deleteAnimal(
        @Param('id', ParseIntPipe) id: number
    ){
        const response: BodyResponse = {
            status: 200,
            error: false,
            errorMessage: undefined,
            data: undefined
        };
        try {
            const deletedAnimal = await this.animalsService.deleteAnimal(id);
            response.data = deletedAnimal;
            return response;
        } catch (e) {
            console.error('Error detallado en deleteAnimal:', e);
            response.status = 404;
            response.error = true;
            response.errorMessage = "Ocurrio un error";
            return response;
        }
    }
}
