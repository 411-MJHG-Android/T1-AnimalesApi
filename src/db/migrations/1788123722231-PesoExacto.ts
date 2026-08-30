import { MigrationInterface, QueryRunner } from "typeorm";

export class PesoExacto1788123722231 implements MigrationInterface {
    name = 'PesoExacto1788123722231'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animal" DROP COLUMN "peso"`);
        await queryRunner.query(`ALTER TABLE "animal" ADD "peso" numeric(5,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "animal" DROP COLUMN "peso"`);
        await queryRunner.query(`ALTER TABLE "animal" ADD "peso" integer NOT NULL`);
    }

}
