import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  @Output() recipeUpdateEvent = new EventEmitter<void>();

  recipeList: Recipe[] = [
    new Recipe(
      'Test Recipe-01',
      'Are you interested in learning how to write a recipe? This skill is an art. That’s why I’m providing my best tips for good recipe writing.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      [new Ingredient('Apple', 15), new Ingredient('Orange', 5)]
    ),
    new Recipe(
      'Test Recipe-02',
      'Are you interested in learning how to write a recipe? This skill is an art. That’s why I’m providing my best tips for good recipe writing.',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/10/0/WU1712H_Cauliflower-Mac-and-Cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580140849133.jpeg',
      [new Ingredient('Green Chilly', 5), new Ingredient('Onion', 5)]
    ),
    new Recipe(
      'Test Recipe-03',
      'Are you interested in learning how to write a recipe? This skill is an art. That’s why I’m providing my best tips for good recipe writing.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xvM8B5GC14pHVbURFyAsVD_qjdf-bBKK6g&usqp=CAU',
      [new Ingredient('Cucumber', 5), new Ingredient('Carrot', 5)]
    ),
    new Recipe(
      'Test Recipe-04',
      'Are you interested in learning how to write a recipe? This skill is an art. That’s why I’m providing my best tips for good recipe writing.',
      'https://media.self.com/photos/5f1eef2914b005b8d8eba4d0/4:3/w_384/30-Minute-Roasted-Vegetable-Tacos-with-Chimichurri-BIG-flavor-satisfying-HEALTHY-vegan-glutenfree-plantbased-tacos-chimichurri-cauliflower-minimalistbaker-recipe-6.jpg',
      [new Ingredient('Pine Apple', 5), new Ingredient('Grapes', 5)]
    ),
  ];

  getRecipieById(id: number): Recipe {
    return this.recipeList[id];
  }

  updateRecipe(id: number, recipe: Recipe) {
    this.recipeList[id] = recipe;
    this.recipeUpdateEvent.emit();
  }
}
