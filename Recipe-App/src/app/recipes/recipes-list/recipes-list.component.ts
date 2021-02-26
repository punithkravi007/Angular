import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipeList: any;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeList = this.recipeService.recipeList;
  }
}
