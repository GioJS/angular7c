import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {SharedModule} from '../shared/shared.module';
import {AppRouterModule} from '../app-router.module';
import {RecipeService} from '../recipes/recipe.service';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthIterceptor} from '../shared/auth.iterceptor';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, ErrorPageComponent],
  imports: [SharedModule, AppRouterModule],
  exports: [AppRouterModule, HeaderComponent],
  providers: [RecipeService, DataStorageService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthIterceptor,
    multi: true
  }]
})
export class CoreModule {
}
