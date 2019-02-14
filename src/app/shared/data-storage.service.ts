import {Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {RecipeService} from '../recipes/recipe.service';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipesService: RecipeService) {
  }

  storeRecipes() {
    /*return this.http.put<Recipe[]>('https://recipes-ng-course.firebaseio.com/recipes.json',
      this.recipesService.getRecipes(), {params: new HttpParams().set('auth', token)});*/
    const putRequest = new HttpRequest('PUT',
      'https://recipes-ng-course.firebaseio.com/recipes.json', this.recipesService.getRecipes(),
      {reportProgress: true});
    return this.http.request(putRequest);
  }

  getRecipes() {
    this.http.get<Recipe[]>('https://recipes-ng-course.firebaseio.com/recipes.json').subscribe((recipes) => {
      console.log(recipes);
      recipes.map((recipe) => {
        if (!recipe['ingredients']) {
          recipe['ingredients'] = [];
        }
      });
      this.recipesService.setRecipes(recipes);
    });
  }
}
