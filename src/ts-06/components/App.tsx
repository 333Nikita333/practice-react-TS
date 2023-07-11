import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

import Form from './ContactForm';
import ContactsList from './ContactsList';
import { AppBox } from './App.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function notifiesAlert(numberContact, nameContact) {
    return toast.error(
      `${numberContact} is already in contacts under the name ${nameContact}.`
    );
  }

  function checkСontact(newNumber) {
    return contacts.some(contact => contact.phone === newNumber);
  }

  function onSubmit(name, phone) {
    if (checkСontact(phone)) {
      return notifiesAlert(phone, name);
    }

    dispatch(addContact({ name, phone }));
    toast.success(`Contact ${name} added successfully`);
  }

  return (
    <AppBox>
      <ToastContainer autoClose={2000} position="top-center" />
      <h1>Phonebook</h1>
      <Form onSubmit={onSubmit} />

      <h2>Contacts</h2>

      {isLoading && !error && <b>Request in progress...</b>}

      {error && <p>Something went wrong, please try again later</p>}

      <ContactsList />
    </AppBox>
  );
}
