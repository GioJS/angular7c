import * as AuthActions from './auth.actions';


export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducers(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case  AuthActions.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case AuthActions.SIGNIN:
      return;
    case AuthActions.SIGNUP:
      return {
        ...state,
        authenticated: true
      };
    case AuthActions.SET_TOKEN:
      return;
    default:
      return state;
  }
}
