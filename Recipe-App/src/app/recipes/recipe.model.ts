import { Ingredient } from '../ingredient/ingredient.model';

export class Recipe {
  constructor(
    private name: string,
    private description: string,
    private image: string,
    private ingredients: Ingredient[]
  ) {}
}
