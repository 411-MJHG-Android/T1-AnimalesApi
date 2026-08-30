import { IsString, IsNotEmpty, IsOptional, IsInt, IsNumber, Min, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateAnimalDto{
    @IsString()
    @IsNotEmpty()
    nombre!: string;
    @IsString()
    @IsNotEmpty()
    especie!: string;
    @IsString()
    @IsNotEmpty()
    raza!: string;
    @IsInt()
    @Min(0)
    edad!: number;
    @IsNumber()
    @IsPositive()
    peso!: number;
}

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {}