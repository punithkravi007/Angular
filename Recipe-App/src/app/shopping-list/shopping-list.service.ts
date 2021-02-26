import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientList: Ingredient[] = [];

  addIngredient(ingredient: Ingredient) {
    this.ingredientList.push(ingredient);
  }
}
