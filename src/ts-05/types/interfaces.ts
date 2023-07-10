export interface Contact {
  id: string;
  name: string;
  number: string;
}

export interface ContactsState {
  contacts: Contact[];
}

export interface AddContactPayload extends Omit<Contact, 'id'> {
  name: string;
  number: string;
}

export interface RootState {
  contacts: ContactsState;
  filter: string;
}
