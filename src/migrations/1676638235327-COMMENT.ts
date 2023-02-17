import { MigrationInterface, QueryRunner } from "typeorm";

export class COMMENT1676638235327 implements MigrationInterface {
    name = 'COMMENT1676638235327'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comment" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "rating" integer NOT NULL, "review" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "book_id" integer, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_9b6490a2fe4fbdd12934b90ed6a" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_9b6490a2fe4fbdd12934b90ed6a"`);
        await queryRunner.query(`DROP TABLE "comment"`);
    }

}
