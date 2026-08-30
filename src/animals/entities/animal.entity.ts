import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity('animal')
export class Animal{
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    nombre!: string
    @Column()
    especie!: string;
    @Column()
    raza!: string;
    @Column()
    edad!: number;
    //Para que permita numeros mas precisos 
    @Column('decimal', { precision: 5, scale: 2 })
    peso!: number;
}