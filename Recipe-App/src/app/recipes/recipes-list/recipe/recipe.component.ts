import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: any;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  showRecipieDetails() {
    this.recipeService.displayRecipeInfo(this.recipe);
  }
}
