import { nanoid } from 'nanoid';
import { ChangeEvent, Component } from 'react';
import { IContact, IAppState } from '../interfaces/interfaces';
import { AppBox } from './App.styled';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Form/Form';

export class App extends Component<object, IAppState> {
  state: IAppState = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  notifiesAlert = (nameContact: string): void => {
    alert(`${nameContact} is already in contacts.`);
  };

  checkСontact = (nameContact: string): boolean => {
    return this.state.contacts.some(
      ({ name: curentName }) => curentName === nameContact
    );
  };

  addContact = (name: string, number: string): void => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(4), name, number }],
    }));
  };

  onDeleteContact = (contactId: string): void => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleSubmit = ({
    name: newName,
    number,
  }: Pick<IContact, 'name' | 'number'>): void => {
    this.checkСontact(newName)
      ? this.notifiesAlert(newName)
      : this.addContact(newName, number);
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <AppBox>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} filter={filter} />
        <ContactsList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.onDeleteContact}
        />
      </AppBox>
    );
  }
}
