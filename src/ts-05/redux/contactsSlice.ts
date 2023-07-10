import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { Contact, ContactsState } from '../types/interfaces';
import storage from 'redux-persist/lib/storage';
import { PersistConfig } from 'redux-persist/lib/types';
import { persistReducer } from 'redux-persist';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  } as ContactsState,
  reducers: {
    addContact: {
      reducer(state, action: PayloadAction<Contact>): void {
        state.contacts.push(action.payload);
      },
      prepare(name: string, number: string) {
        return {
          payload: {
            id: nanoid(4),
            name,
            number,
          } as Contact,
        };
      },
    },
    deleteContact(state, action: PayloadAction<string>): void {
      state.contacts = state.contacts.filter(
        (contact: Contact) => contact.id !== action.payload
      );
    },
  },
});

const persistConfig: PersistConfig<ContactsState> = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
