import { createSelector } from '@reduxjs/toolkit';
import { Contact, RootState } from '../types/interfaces';

export const selectContacts = (state: RootState) => state.contacts.contacts;

export const selectIsLoading = (state: RootState) => state.contacts.isLoading;

export const selectError = (state: RootState) => state.contacts.error;

export const selectFilter = (state: RootState) => state.filter;

export const selectContactByName = createSelector(
  [selectContacts, selectFilter],
  (contacts: Contact[], filter: string): Contact[] => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
