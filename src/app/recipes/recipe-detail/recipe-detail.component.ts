import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails: Recipe;
  index: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipeDetails = this.recipeService.getById(params['id']);
      this.index = params['id'];
    });
  }

  addToShop() {

      this.recipeService.addIngredients(this.recipeDetails.ingredients);

  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDelete() {
    this.recipeService.delete(this.index);
    this.router.navigate(['/recipes']);
  }
}
