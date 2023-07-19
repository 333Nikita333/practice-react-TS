import { useSelector } from 'react-redux';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isLoading,
  };
};

