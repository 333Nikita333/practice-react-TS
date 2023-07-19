import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { filterListContacts } from 'redux/filrer/selectors';

export const useContacts = () => {
  const allContacts = useSelector(selectContacts);
  const filteredContacts = useSelector(filterListContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    allContacts,
    filteredContacts,
    isLoading,
    error,
  };
};
