import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from '../redux/contactsSlice';
import { getContacts } from '../redux/selectors';
import { Contact, RootState } from '../types/interfaces';
import { AppBox } from './App.styled';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

export default function App() {
  const contacts: Contact[] = useSelector((state: RootState) =>
    getContacts(state)
  );
  const dispatch = useDispatch();

  function notifiesAlert(numberContact: string): void {
    toast.error(`${numberContact} is already in contacts.`);
  }

  function checkСontact(newNumber: string): boolean {
    return contacts.some(contact => contact.number === newNumber);
  }

  function addingContact(name: string, number: string): void {
    dispatch(addContact(name, number));
    toast.success(`Contact ${name} was added`);
  }

  function onSubmit(name: string, number: string): void {
    checkСontact(number) ? notifiesAlert(number) : addingContact(name, number);
  }

  return (
    <AppBox>
      <ToastContainer autoClose={2000} position="top-center" />
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>
      {contacts && contacts.length > 0 ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>Contacts list is empty</p>
      )}
    </AppBox>
  );
}
