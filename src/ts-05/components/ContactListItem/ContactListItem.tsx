import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { Contact } from '../../types/interfaces';
import { Item, Name, Number } from './ContactListItem.styled';
import { toast } from 'react-toastify';

const ContactsListItem: FC<Contact> = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = (): void => {
    dispatch(deleteContact(id));
    toast.success(`Contact ${name} deleted`);
  };

  return (
    <Item id={id}>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </Item>
  );
};

export default ContactsListItem;
