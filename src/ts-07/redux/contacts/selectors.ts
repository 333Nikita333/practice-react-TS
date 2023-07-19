import { RootState, Contact } from '../../types/interfaces';

export const selectContacts = (state: RootState): Contact[] =>
  state.contacts.items;
export const selectIsLoading = (state: RootState): boolean =>
  state.contacts.isLoading;
export const selectError = (state: RootState): string | null =>
  state.contacts.error;
