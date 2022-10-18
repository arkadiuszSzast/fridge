import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import Ingredient from '../ingredients/ingredient.entity';
import Recipe from './recipe.entity';
import { RecipeService } from './recipe.service';

@Entity('recipe_ingredient')
class IngredientToRecipe {
  @PrimaryColumn({ type: 'uuid' })
  readonly id: string;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.ingredientRecipe, {
    eager: true,
  })
  @JoinColumn({ name: 'ingredient' })
  readonly ingredient: Ingredient;
  @ManyToOne(() => Recipe, (recipe) => recipe.ingredients)
  @JoinColumn({ name: 'recipe' })
  readonly recipe: Recipe;
  @Column()
  readonly amount: number;
}

export default IngredientToRecipe;
