import { MigrationInterface, QueryRunner } from "typeorm";

export class INIT1676482122483 implements MigrationInterface {
    name = 'INIT1676482122483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "book" ("id" SERIAL NOT NULL, "bookName" character varying NOT NULL, "bookImage" character varying NOT NULL, "bookAuthor" character varying NOT NULL, "bookLink" character varying NOT NULL, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "book"`);
    }

}
