import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contacts/operations';
import { useContacts, useLoaders } from 'hooks';
import ContactsForm from 'components/ContactsForm';
import ContactsList from 'components/ContactList';
import Filter from 'components/Filter';
import { Message, Title, Wrapper, Text } from './ContactsBar.styled';
import { errorNotification, successNotification } from 'hooks/useToasts';

const ContactsBar = () => {
  const dispatch = useDispatch();
  const { allContacts, isLoading, error } = useContacts();
  const { LoaderBig } = useLoaders();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const notifiesAlert = (numberContact, nameContact) => {
    return errorNotification(
      `${numberContact} is already in contacts under the name ${nameContact}.`
    );
  };

  const checkСontact = newNumber => {
    return allContacts.some(contact => contact.number === newNumber);
  };

  const onSubmit = (name, number) => {
    if (checkСontact(number)) {
      return notifiesAlert(number, name);
    }

    dispatch(addContact({ name, number }));
    successNotification(`Contact ${name} added successfully`);
  };

  return (
    <Wrapper isHeight={allContacts.length > 0}>
      <Title>Phonebook</Title>
      <ContactsForm onSubmit={onSubmit} />

      <Text>Your contacts</Text>

      {!error && isLoading && <LoaderBig />}

      {!error && !isLoading && allContacts.length === 0 ? (
        <Message>Contacts list is empty</Message>
      ) : (
        <>
          <Filter />
          <ContactsList />
        </>
      )}
    </Wrapper>
  );
};

export default ContactsBar;
