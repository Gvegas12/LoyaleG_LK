interface AuthState {
  isAuth: boolean;
}

interface AuthActions {
  setIsAuth: (newState: boolean) => void;
  logout: () => void;
}

export interface IAuthSchema extends AuthState, AuthActions {}
