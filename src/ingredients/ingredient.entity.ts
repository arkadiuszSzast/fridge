import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

import IngredientToRecipe from '../recipes/ingredientToRecipe.entity';

@Entity()
class Ingredient {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ unique: true })
  name: string;

  @OneToMany(
    () => IngredientToRecipe,
    (ingredientToRecipe) => ingredientToRecipe.ingredient,
  )
  ingredientRecipe: IngredientToRecipe[];
}

export default Ingredient;
