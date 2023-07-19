import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { errorNotification, successNotification } from '../../hooks/useToasts';
import {
  clearAuthHeader,
  contactApi,
  setAuthHeader,
} from '../../services/phonebookAPI';
import {
  RootState,
  User,
  UserLogin,
  UserRegisterResponse,
} from '../../types/interfaces';

contactApi();

export const register = createAsyncThunk<
  UserRegisterResponse,
  User,
  { state: RootState; rejectValue: string }
>('auth/register', async (credentials: User, thunkAPI) => {
  try {
    const response: AxiosResponse<UserRegisterResponse> = await axios.post(
      '/users/signup',
      credentials
    );
    setAuthHeader(response.data.token);
    successNotification('Successful registration');
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<string>;
    errorNotification(
      `${axiosError.response?.data || 'Registration error'}. Please try again.`
    );
    return thunkAPI.rejectWithValue(axiosError.message);
  }
});

export const logIn = createAsyncThunk<
  UserRegisterResponse,
  UserLogin,
  { state: RootState; rejectValue: string }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const response: AxiosResponse<UserRegisterResponse> = await axios.post(
      '/users/login',
      credentials
    );
    setAuthHeader(response.data.token);
    successNotification('Successful authorization');
    return response.data;
  } catch (error) {
    errorNotification(
      `Something went wrong. Invalid login or password. Please try again. ❌`
    );
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const logOut = createAsyncThunk<
  void,
  void,
  { state: RootState; rejectValue: string }
>('/users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    successNotification('Successful logout');
  } catch (error) {
    errorNotification('Something went wrong. Please try again. ❌');
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});

export const refreshUser = createAsyncThunk<
  User,
  void,
  { state: RootState; rejectValue: string }
>('auth/refresh', async (_, thunkAPI) => {
  const { token } = thunkAPI.getState().auth;

  if (!token) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(token);
    const response: AxiosResponse<User> = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as Error).message);
  }
});
