import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import Ingredient from './ingredients/ingredient.entity';
import IngredientToRecipe from './recipes/ingredientToRecipe.entity';
import Recipe from './recipes/recipe.entity';
import User from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [Ingredient, Recipe, IngredientToRecipe, User],
      }),
    }),
  ],
})
export class DatabaseModule {}
