import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipesService: RecipeService) {
  }

  storeRecipes() {
    return this.http.put('https://recipes-ng-course.firebaseio.com/recipes.json', this.recipesService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://recipes-ng-course.firebaseio.com/recipes.json').subscribe((response: Response) => {
      const recipes: Recipe[] = response.json();
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
