import { RootState, User } from '../../types/interfaces';

export const selectIsLoggedIn = (state: RootState): boolean =>
  state.auth.isLoggedIn;

export const selectUser = (state: RootState): User => state.auth.user;

export const selectIsRefreshing = (state: RootState): boolean =>
  state.auth.isRefreshing;

export const selectIsLoading = (state: RootState): boolean =>
  state.auth.isLoading;
