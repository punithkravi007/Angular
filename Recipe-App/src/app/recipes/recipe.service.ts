import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { exhaustMap, map, take } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesData: Subject<Recipe[]> = new Subject<Recipe[]>();
  constructor(private http: HttpClient, private authService : AuthService) {}

  recipes: Recipe[] = [];
  counter: number = 0;

  getRecipes() {
    return this.http
      .get<{ [key: string]: Recipe }>(
        'https://recipe-683d0-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((response) => {
          let recipes: Recipe[] = [];
          for (const key in response) {
            if (Object.prototype.hasOwnProperty.call(response, key)) {
              const recipe = response[key];
              recipes.push(recipe);
            }
          }
          return recipes;
        })
      );
  }

  async getRecipeById(id: number): Promise<Recipe> {
    return new Promise((resolve) => {
      this.getRecipes().subscribe((data) => {
        let recipe = data.find((r) => {
          return r.id == id;
        });
        resolve(recipe);
      });
    });
  }

  addRecipe(recipe: Recipe) {
    recipe.id = this.counter;
    this.http
      .post(
        'https://recipe-683d0-default-rtdb.firebaseio.com/recipes.json',
        recipe
      )
      .subscribe((response) => {
        this.getRecipes().subscribe((data) => {
          this.recipesData.next(data);
        });
      });
    this.counter += 1;
  }

  updateRecipe(recipe: Recipe, recipeId: number) {
    recipe.id = recipeId;
    this.recipes[recipeId] = recipe;
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
