import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-info',
  templateUrl: './recipes-info.component.html',
  styleUrls: ['./recipes-info.component.css'],
})
export class RecipesInfoComponent implements OnInit {
  recipe: any;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.displayRecipeInfoEvent.subscribe((recipe) => {
      this.recipe = recipe;
    });
  }
}
