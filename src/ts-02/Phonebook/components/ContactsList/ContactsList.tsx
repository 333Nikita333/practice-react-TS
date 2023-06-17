import { Component } from 'react';
import { IContactListProps } from '../../interfaces/interfaces';
import ContactListItem from '../ContactListItem/ContactListItem';
import { List } from './ContactsList.styled';

class ContactList extends Component<IContactListProps> {
  render() {
    const { contacts, filter, onDeleteContact } = this.props;

    return contacts.length > 0 ? (
      <List>
        {contacts
          .filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          ))}
      </List>
    ) : (
      <p>Contact list is empty</p>
    );
  }
}

export default ContactList;
