import { FC } from 'react';
import { useContacts } from '../../hooks';
import ContactListItem from '../ContactListItem/ContactListItem';
import { Item, List, Wrapper } from './ContactList.styled';

const ContactsList: FC = () => {
  const { filteredContacts } = useContacts();

  return (
    <Wrapper>
      {filteredContacts.length > 0 ? (
        <>
          <List>
            {filteredContacts.map(({ id, name, number }) => (
              <Item key={id}>
                <ContactListItem id={id} name={name} number={number} />
              </Item>
            ))}
          </List>
        </>
      ) : (
        <b>No contact found</b>
      )}
    </Wrapper>
  );
};

export default ContactsList;
