import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/ingredient/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-info',
  templateUrl: './recipes-info.component.html',
  styleUrls: ['./recipes-info.component.css'],
})
export class RecipesInfoComponent implements OnInit {
  recipe: any;
  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.recipeService.displayRecipeInfoEvent.subscribe((recipe) => {
      this.recipe = recipe;
    });
  }

  addToShoppingList() {
    let ingredients = this.recipe.ingredients;
    ingredients.forEach((ingredient: Ingredient) => {
      this.shoppingListService.addIngredient(ingredient);
    });
  }
}
