import { Component } from 'react';
import { IContactListItem } from '../../interfaces/interfaces';
import { Item, Name, Number } from './ContactListItem.styled';

class ContactListItem extends Component<IContactListItem> {
  render() {
    const { id, name, number, onDeleteContact } = this.props;

    return (
      <Item id={id}>
        <Name>{name}</Name>
        <Number>{number}</Number>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </Item>
    );
  }
}

export default ContactListItem;
