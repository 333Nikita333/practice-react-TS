import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';
import { AuthState, User, UserRegisterResponse } from '../../types/interfaces';

const initialState: AuthState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<UserRegisterResponse>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(register.rejected, state => {
        state.isLoading = false;
      })
      ////////////////////////////////////////////////
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        logIn.fulfilled,
        (state, action: PayloadAction<UserRegisterResponse>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(logIn.rejected, state => {
        state.isLoading = false;
      })
      ////////////////////////////////////////////////
      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      })
      ////////////////////////////////////////////////
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoading = false;
      }),
});

export const authReducer = authSlice.reducer;
