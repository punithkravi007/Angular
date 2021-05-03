import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeList: any;
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipeList = this.recipeService.recipeList;
    this.recipeService.recipeUpdateEvent.subscribe(() => {
      this.recipeList = this.recipeService.recipeList;
      console.log(this.recipeList);
      
    });
  }
}
