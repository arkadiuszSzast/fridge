import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRecipeTable1664218306054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "recipe" ("id" uuid DEFAULT gen_random_uuid() PRIMARY KEY, "name" varchar(100) UNIQUE)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS recipe`);
  }
}
