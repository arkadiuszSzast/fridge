import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateIngredientTable1663416419259 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "ingredient" ("id" uuid DEFAULT gen_random_uuid() PRIMARY KEY, "name" varchar(100) UNIQUE)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS ingredient`);
  }
}
