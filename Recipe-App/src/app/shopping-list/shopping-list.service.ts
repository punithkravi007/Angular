import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientList: Ingredient[] = [];

  addIngredient(ingredient: Ingredient) {
    if (this.ingredientList.length > 0) {
      let counter = 0;
      let index = 0;
      for (let i = 0; i < this.ingredientList.length; i++) {
        if (this.ingredientList[i].name === ingredient.name) {
          counter = counter + 1;
          index = i;
          break;
        }
      }
      if (counter > 0) {
        this.ingredientList[index].quantity =
          this.ingredientList[index].quantity + ingredient.quantity;
      } else {
        this.ingredientList.push(ingredient);
      }
    } else {
      this.ingredientList.push(ingredient);
      console.log(ingredient.name, 'does not exist');
    }
  }
}
