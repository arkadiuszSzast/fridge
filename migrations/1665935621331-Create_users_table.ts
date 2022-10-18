import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1665935621331 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE IF NOT EXISTS "user" ("id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
                                                             "email" varchar unique,
                                                             "password" varchar
             )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "user"`);
  }
}
