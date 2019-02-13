import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {SharedModule} from '../shared/shared.module';
import {AppRouterModule} from '../app-router.module';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {RecipeService} from '../recipes/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, ErrorPageComponent],
  imports: [SharedModule, AppRouterModule],
  exports: [AppRouterModule, HeaderComponent],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService]
})
export class CoreModule {
}
