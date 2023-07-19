import { useSelector } from 'react-redux';
import { selectContactByName, selectIsLoading } from '../../redux/selectors';
import ContactsListItem from '../ContactListItem/ContactListItem';
import Filter from '../Filter/Filter';
import { Item, List, Wrapper } from './ContactsList.styled';
import { Contact, RootState } from '../../types/interfaces';

const ContactsList = () => {
  const contacts: Contact[] = useSelector((state: RootState) =>
    selectContactByName(state)
  );
  const isLoading: boolean = useSelector((state: RootState) =>
    selectIsLoading(state)
  );

  return (
    <Wrapper>
      {contacts.length > 0 && (
        <>
          <Filter />
          <List>
            {contacts.map(contact => (
              <Item key={contact.id}>
                <ContactsListItem contact={contact} />
              </Item>
            ))}
          </List>
        </>
      )}

      {!isLoading && contacts.length === 0 && <p>Contacts list is empty</p>}
    </Wrapper>
  );
};

export default ContactsList;
