import { Controller, Get } from '@nestjs/common';

import Recipe from './recipe.entity';
import { RecipeService } from './recipe.service';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly ingredientService: RecipeService) {}

  @Get()
  getAll(): Promise<Recipe[]> {
    return this.ingredientService.getAllIngredients();
  }
}
