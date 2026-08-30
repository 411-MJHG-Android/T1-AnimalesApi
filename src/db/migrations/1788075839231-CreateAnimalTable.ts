import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAnimalTable1788075839231 implements MigrationInterface {
    name = 'CreateAnimalTable1788075839231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "animal" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "especie" character varying NOT NULL, "raza" character varying NOT NULL, "edad" integer NOT NULL, "peso" integer NOT NULL, CONSTRAINT "PK_af42b1374c042fb3fa2251f9f42" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "animal"`);
    }

}
