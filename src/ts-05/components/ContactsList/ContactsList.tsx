import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { RootState } from '../../types/interfaces';
import ContactsListItem from '../ContactListItem/ContactListItem';
import { List } from './ContactsList.styled';

const ContactsList: FC = () => {
  const contacts = useSelector((state: RootState) => getContacts(state));
  const filter = useSelector((state: RootState) => getFilter(state));

  return (
    <List>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))
        .map(({ id, name, number }) => (
          <ContactsListItem key={id} id={id} name={name} number={number} />
        ))}
    </List>
  );
};

export default ContactsList;
