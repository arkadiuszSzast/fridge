import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

import Ingredient from '../ingredients/ingredient.entity';
import ingredientEntity from '../ingredients/ingredient.entity';
import IngredientToRecipe from './ingredientToRecipe.entity';
import ingredientToRecipeEntity from './ingredientToRecipe.entity';

@Entity()
class Recipe {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(
    () => IngredientToRecipe,
    (ingredientToRecipe) => ingredientToRecipe.recipe,
    { eager: true },
  )
  ingredients: IngredientToRecipe[];
}

export default Recipe;
