import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  errorNotification,
  successNotification,
  useContacts,
} from '../../hooks';
import { addContact, fetchContacts } from '../../redux/contacts/operations';
import { AppDispatch } from '../../redux/store';
import ContactsList from '../ContactList/ContactList';
import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import { Loader } from '../Loader/Loader';
import { Message, Text, Title, Wrapper } from './ContactsBar.styled';

const ContactsBar: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { allContacts, isLoading, error } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const notifiesAlert = (numberContact: string, nameContact: string): void => {
    errorNotification(
      `${numberContact} is already in contacts under the name ${nameContact}.`
    );
  };

  const checkСontact = (newNumber: string): boolean => {
    return allContacts.some(contact => contact.number === newNumber);
  };

  const onSubmit = (name: string, number: string): void => {
    if (checkСontact(number)) {
      return notifiesAlert(number, name);
    }

    dispatch(addContact({ name, number }));
    successNotification(`Contact ${name} added successfully`);
  };

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactsForm onSubmit={onSubmit} />

      <Text>Your contacts</Text>

      {!error && isLoading && <Loader />}

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
