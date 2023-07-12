export interface Contact {
  id: string;
  name: string;
  phone: string;
}

export interface ContactState {
  contacts: Contact[];
  isLoading: boolean;
  error: null | string;
}

export interface RootState {
  contacts: ContactState;
  filter: string;
}
