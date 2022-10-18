import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRecipeIngredientTable1664218444006
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "recipe_ingredient" ("id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
                                                             "ingredient" uuid REFERENCES ingredient ("id"),
                                                             "recipe" uuid REFERENCES recipe ("id"),
                                                             "amount" integer NOT NULL CHECK ("amount" > 0),
                                                             UNIQUE ("ingredient", "recipe")
             )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS recipe_ingredient`);
  }
}
