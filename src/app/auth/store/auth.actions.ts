import {Action} from '@ngrx/store';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class SignupAction implements Action {
  readonly type = SIGNUP;
}

export class SigninAction implements Action {
  readonly type = SIGNIN;
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class SetTokenAction implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions = SigninAction | SignupAction | LogoutAction | SetTokenAction;
