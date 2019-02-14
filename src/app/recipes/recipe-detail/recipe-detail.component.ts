import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails: Recipe;
  index: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router,
              private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeDetails = this.recipeService.getById(params['id']);
      this.index = params['id'];
    });
  }

  addToShop() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipeDetails.ingredients));
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete() {
    this.recipeService.delete(this.index);
    this.router.navigate(['/recipes']);
  }
}
