import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService) {
  }

  storeRecipes() {
    return this.http.put<Recipe[]>('https://recipes-ng-course.firebaseio.com/recipes.json', this.recipesService.getRecipes());
  }

  getRecipes() {
    this.http.get<Recipe[]>('https://recipes-ng-course.firebaseio.com/recipes.json').subscribe((recipes) => {
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
