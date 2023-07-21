import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../redux/auth/selectors';
import { User } from '../types/interfaces';

export const useAuth = () => {
  const isLoggedIn: boolean = useSelector(selectIsLoggedIn);
  const isRefreshing: boolean = useSelector(selectIsRefreshing);
  const user: User = useSelector(selectUser);
  const isLoading: boolean = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
  };
};
