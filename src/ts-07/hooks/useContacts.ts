import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/selectors';
import { filterListContacts } from '../redux/filrer/selectors';
import { Contact } from '../types/interfaces';

export const useContacts = () => {
  const allContacts: Contact[] = useSelector(selectContacts);
  const filteredContacts: Contact[] = useSelector(filterListContacts);
  const isLoading: boolean = useSelector(selectIsLoading);
  const error: string | null = useSelector(selectError);

  return {
    allContacts,
    filteredContacts,
    isLoading,
    error,
  };
};
