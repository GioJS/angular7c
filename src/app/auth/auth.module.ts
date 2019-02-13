import {NgModule} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {AuthRouterModule} from './auth-router.module';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRouterModule
  ]
})
export class AuthModule {
}
