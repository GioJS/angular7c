import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [new Recipe(
    'A test recipe',
    'this is a simply test',
    'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_960/' +
    'https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg',
    [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]),
    new Recipe(
      'A test recipe 2',
      'this is a simply test',
      'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_960/' +
      'https://storage.googleapis.com/gen-atmedia/3/2018/06/d83512a0fe4e2d338f89ccde0c5de227646921cf.jpeg',
      [new Ingredient('Salad', 5)])];

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
}
