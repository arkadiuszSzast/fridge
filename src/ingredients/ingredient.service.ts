import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Ingredient from './ingredient.entity';
import IngredientEntity from './ingredient.entity';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private readonly ingredientRepository: Repository<IngredientEntity>,
  ) {}

  getAllIngredients() {
    return this.ingredientRepository.find();
  }
}
