import { MigrationInterface, QueryRunner } from "typeorm";

export class ADDLIKESTOBOOKS1676654441989 implements MigrationInterface {
    name = 'ADDLIKESTOBOOKS1676654441989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" ADD "bookLikes" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "bookLikes"`);
    }

}
