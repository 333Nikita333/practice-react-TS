import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { Contact, RootState } from '../types/interfaces';

axios.defaults.baseURL = 'https://641ddb95945125fff3d7cc2b.mockapi.io';
//! после createAsyncThunk в дженерике указывается 1. тип успешного
//! результата, 2. тип принимаемых аргументов, 3. тип обьекта параметров
//! (опционально) (имеет некоторые свойства, в данном случае используется
//! тип состояния Redux Store и тип значения, которое будет возвращено в
//! случае, если санк завершается с ошибкой)
//* void означает, что функция fetchContacts не принимает никаких
//* аргументов при вызове.
export const fetchContacts = createAsyncThunk<
  Contact[],
  void,
  { state: RootState; rejectValue: string }
>('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response: AxiosResponse<Contact[]> = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const addContact = createAsyncThunk<
  Contact,
  Partial<Contact>,
  { state: RootState; rejectValue: string }
>('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const response: AxiosResponse<Contact> = await axios.post(
      '/contacts',
      contact
    );
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});

export const deleteContact = createAsyncThunk<
  Contact,
  string,
  { state: RootState; rejectValue: string }
>('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    const response: AxiosResponse<Contact> = await axios.delete(
      `/contacts/${contactId}`
    );
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue((e as Error).message);
  }
});
