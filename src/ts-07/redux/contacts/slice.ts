import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ContactState } from '../../types/interfaces';
import {
  addContact,
  deleteContact,
  fetchContacts,
  patchContacts,
} from './operations';

const handlePending = (state: ContactState) => {
  state.isLoading = true;
};
const handleRejected = (
  state: ContactState,
  action: PayloadAction<string | undefined, string>
) => {
  state.isLoading = false;
  state.error = action.payload || null;
};

const initialState: ContactState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      ///////////////////////////////////////////////////
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      ///////////////////////////////////////////////////
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index: number = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        // state.items = state.items.filter(
        //   contact => contact.id !== action.payload.id
        // );
      })
      .addCase(deleteContact.rejected, handleRejected)
      ///////////////////////////////////////////////////
      .addCase(patchContacts.pending, handlePending)
      .addCase(patchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(patchContacts.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
