import ContactItem from 'components/ContactListItem';
import { Item, List, Wrapper } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectContactByName, selectIsLoading} from 'redux/selectors';
import Filter from 'components/Filter';

const ContactsList = () => {
  const contacts = useSelector(selectContactByName);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Wrapper>
      {contacts.length > 0 && (
        <>
          <Filter />
          <List>
            {contacts.map(contact => (
              <Item key={contact.id}>
                <ContactItem contact={contact} />
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
