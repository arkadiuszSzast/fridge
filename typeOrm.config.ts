import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';

import { CreateIngredientTable1663416419259 } from './migrations/1663416419259-CreateIngredientTable';
import { CreateRecipeTable1664218306054 } from './migrations/1664218306054-CreateRecipeTable';
import { CreateRecipeIngredientTable1664218444006 } from './migrations/1664218444006-CreateRecipe_IngredientTable';
import { CreateUsersTable1665935621331 } from './migrations/1665935621331-Create_users_table';
import Ingredient from './src/ingredients/ingredient.entity';
import IngredientToRecipe from './src/recipes/ingredientToRecipe.entity';
import Recipe from './src/recipes/recipe.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  migrations: [
    CreateIngredientTable1663416419259,
    CreateRecipeTable1664218306054,
    CreateRecipeIngredientTable1664218444006,
    CreateUsersTable1665935621331,
  ],
  entities: [Ingredient, Recipe, IngredientToRecipe],
});
