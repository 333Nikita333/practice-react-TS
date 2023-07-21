import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { RoutesProps } from '../types/types';

const PrivateRoute: FC<RoutesProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect: boolean = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
