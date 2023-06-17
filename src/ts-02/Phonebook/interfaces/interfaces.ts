import { ChangeEvent } from 'react';

export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface IAppState {
  contacts: IContact[];
  filter: string;
}

export interface IFormData extends Omit<IContact, 'id'> {
  name: string;
  number: string;
}

export interface IFormProps {
  onSubmit: (formData: IFormData) => void;
}

export interface IFilterProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  filter: string;
}

export interface IContactListProps extends IAppState {
  onDeleteContact: (contactId: string) => void;
}

export interface IContactListItem extends IContact {
  onDeleteContact: (contactId: string) => void;
}
