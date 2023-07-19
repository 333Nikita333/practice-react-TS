export interface UserRegister {
  name: string;
  email: string;
  password: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  name: string | null;
  email: string | null;
}

export interface UserRegisterResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
}

export interface Contact {
  id: string;
  name: string;
  number: string;
}
export interface ContactState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
}

export interface RootState {
  auth: AuthState;
  contacts: ContactState;
  filter: string;
}
