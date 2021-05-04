import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const recipeId = params['id'];
      this.recipeService.getRecipeById(recipeId).then((recipe)=>{
        this.recipe = recipe;
      });
    });
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['recipes']);
  }
}
