import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';
import {DataStorageService} from '../shared/data-storage.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  constructor(private shoppingListService: ShoppingListService) {
  }

  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getById(id: number): Recipe {
    return this.recipes[id];
  }

  delete(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
