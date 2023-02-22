import { MigrationInterface, QueryRunner } from "typeorm";

export class ADDCREATIONDATETOBOOK1676548486268 implements MigrationInterface {
    name = 'ADDCREATIONDATETOBOOK1676548486268'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "created_at"`);
    }

}
