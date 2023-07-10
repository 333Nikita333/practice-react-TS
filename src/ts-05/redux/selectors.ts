import { RootState } from '../types/interfaces';

export const getContacts = (state: RootState) => state.contacts.contacts;

export const getFilter = (state: RootState) => state.filter;
