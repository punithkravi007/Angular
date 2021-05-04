import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css'],
})
export class RecipeAddComponent implements OnInit {
  @ViewChild('recipe', { static: true }) recipe: NgForm;
  selectedRecipe: Recipe = new Recipe();
  imageUrl: string;
  recipeId: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = params['id'];
      this.recipeService.getRecipeById(this.recipeId).then((recipe) => {
        this.selectedRecipe = recipe;
      });
    });
  }

  addRecipe() {
    this.recipeService.addRecipe(this.recipe.value);
    this.recipe.reset();
  }

  updateRecipe() {
    this.recipeService.updateRecipe(this.recipe.value, this.recipeId);
    this.recipe.reset();
    this.router.navigate(['recipes', this.recipeId]);
  }
}
