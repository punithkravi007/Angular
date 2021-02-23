import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  @Output() displayRecipeInfoEvent = new EventEmitter<Recipe>();

  recipeList: Recipe[] = [
    new Recipe(
      'Test Recipe-01',
      'Test Recipe Description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872'
    ),
    new Recipe(
      'Test Recipe-02',
      'Test Recipe Description',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/10/0/WU1712H_Cauliflower-Mac-and-Cheese_s4x3.jpg.rend.hgtvcom.616.462.suffix/1580140849133.jpeg'
    ),
    new Recipe(
      'Test Recipe-03',
      'Test Recipe Description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xvM8B5GC14pHVbURFyAsVD_qjdf-bBKK6g&usqp=CAU'
    ),
    new Recipe(
      'Test Recipe-04',
      'Test Recipe Description',
      'https://media.self.com/photos/5f1eef2914b005b8d8eba4d0/4:3/w_384/30-Minute-Roasted-Vegetable-Tacos-with-Chimichurri-BIG-flavor-satisfying-HEALTHY-vegan-glutenfree-plantbased-tacos-chimichurri-cauliflower-minimalistbaker-recipe-6.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  displayRecipieEvent(recipe: Recipe) {
    this.displayRecipeInfoEvent.emit(recipe);
  }
}
