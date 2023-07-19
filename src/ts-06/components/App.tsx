import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact, fetchContacts } from '../redux/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/selectors';
import { AppBox } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import { Contact, RootState } from '../types/interfaces';
import { AppDispatch } from '../redux/store';

export default function App() {
  const dispatch: AppDispatch = useDispatch();
  const contacts: Contact[] = useSelector((state: RootState) =>
    selectContacts(state)
  );
  const isLoading: boolean = useSelector((state: RootState) =>
    selectIsLoading(state)
  );
  const error: string | null = useSelector((state: RootState) =>
    selectError(state)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function notifiesAlert(numberContact: string, nameContact: string): void {
    toast.error(
      `${numberContact} is already in contacts under the name ${nameContact}.`
    );
  }

  function checkСontact(newNumber: string): boolean {
    return contacts.some(contact => contact.number === newNumber);
  }

  function onSubmit(name: string, number: string): void {
    if (checkСontact(number)) {
      return notifiesAlert(number, name);
    }

    dispatch(addContact({ name, number }));
    toast.success(`Contact ${name} added successfully`);
  }

  return (
    <AppBox>
      <ToastContainer autoClose={2000} position="top-center" />
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>

      {isLoading && !error && <b>Request in progress...</b>}

      {error && <p>Something went wrong, please try again later</p>}

      <ContactsList />
    </AppBox>
  );
}
