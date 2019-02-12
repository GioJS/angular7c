import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list/shopping-list.service';
import {AppRouterModule} from './app-router.module';
import {ErrorPageComponent} from './error-page/error-page.component';
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RecipeService} from './recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
