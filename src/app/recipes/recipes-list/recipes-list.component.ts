import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  private subscription: Subscription;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }
  onNew() {
    this.router.navigate(['recipes', 'new']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
