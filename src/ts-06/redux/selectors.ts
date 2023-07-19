import { createSelector } from '@reduxjs/toolkit';
import { Contact, RootState } from '../types/interfaces';

export const selectContacts = (state: RootState): Contact[] =>
  state.contacts.contacts;

export const selectIsLoading = (state: RootState): boolean =>
  state.contacts.isLoading;

export const selectError = (state: RootState): string | null =>
  state.contacts.error;

export const selectFilter = (state: RootState): string => state.filter;

export const selectContactByName = createSelector(
  [selectContacts, selectFilter],
  (contacts: Contact[], filter: string): Contact[] => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
