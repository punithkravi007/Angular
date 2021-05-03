import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipe: any;
  recipeId: any;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeId = +this.route.snapshot.params['id'];
    this.recipe = this.recipeService.getRecipieById(this.recipeId);
  }

  updateRecipe() {
    console.log(this.recipeId, this.recipe);
    this.recipeService.updateRecipe(this.recipeId, this.recipe);
  }
}
