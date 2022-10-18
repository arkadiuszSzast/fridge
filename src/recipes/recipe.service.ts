import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Recipe from './recipe.entity';
import RecipeEntity from './recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<RecipeEntity>,
  ) {}

  getAllIngredients() {
    return this.recipeRepository.find({
      relations: {
        ingredients: true,
      },
    });
  }
}
