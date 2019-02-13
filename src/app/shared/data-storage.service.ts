import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService, private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put<Recipe[]>('https://recipes-ng-course.firebaseio.com/recipes.json',
      this.recipesService.getRecipes(), {params: new HttpParams().set('auth', token)});
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http.get<Recipe[]>('https://recipes-ng-course.firebaseio.com/recipes.json',
      {params: new HttpParams().set('auth', token)}).subscribe((recipes) => {
      recipes.map((recipe) => {
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      });
      console.log(recipes);
      this.recipesService.setRecipes(recipes);
    });
  }
}
