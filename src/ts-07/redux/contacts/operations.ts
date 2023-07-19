import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { contactApi } from '../../services/phonebookAPI';
import { Contact, RootState } from '../../types/interfaces';

contactApi();

export const fetchContacts = createAsyncThunk<
  Contact[],
  void,
  { state: RootState; rejectValue: string }
>('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response: AxiosResponse<Contact[]> = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    const axiosError = e as AxiosError<string>;
    return thunkAPI.rejectWithValue(axiosError.message);
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
    const axiosError = e as AxiosError<string>;
    return thunkAPI.rejectWithValue(axiosError.message);
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
    const axiosError = e as AxiosError<string>;
    return thunkAPI.rejectWithValue(axiosError.message);
  }
});

export const patchContacts = createAsyncThunk<
  Contact,
  Contact,
  { state: RootState; rejectValue: string }
>('contacts/patchContact', async ({ name, id, number }, thunkAPI) => {
  try {
    const response: AxiosResponse<Contact> = await axios.patch(
      `/contacts/${id}`,
      {
        name,
        number,
      }
    );
    return response.data;
  } catch (e) {
    const axiosError = e as AxiosError<string>;
    return thunkAPI.rejectWithValue(axiosError.message);
  }
});
