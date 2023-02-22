import { MigrationInterface, QueryRunner } from "typeorm";

export class CONTACT1676631935741 implements MigrationInterface {
    name = 'CONTACT1676631935741'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "message" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
