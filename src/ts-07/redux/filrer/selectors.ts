import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from '../contacts/selectors';
import { RootState } from '../../types/interfaces';

export const selectFilter = (state: RootState): string => state.filter;

export const filterListContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
