import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipes/recipe-list/recipe/recipe.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeAddComponent } from './recipes/recipe-add/recipe-add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DescriptionLimiterPipe } from './description-limiter.pipe';
import { RecipeDirective } from './recipes/recipe.directive';
import { AuthComponent } from './auth/auth.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AuthInterceptor } from './auth/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    ShoppingListComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeComponent,
    RecipeDetailsComponent,
    RecipeAddComponent,
    PageNotFoundComponent,
    DescriptionLimiterPipe,
    RecipeDirective,
    AuthComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
