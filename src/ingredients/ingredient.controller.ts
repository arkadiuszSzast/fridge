import { Controller, Get } from '@nestjs/common';

import Ingredient from './ingredient.entity';
import { IngredientService } from './ingredient.service';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get()
  getAll(): Promise<Ingredient[]> {
    return this.ingredientService.getAllIngredients();
  }
}
