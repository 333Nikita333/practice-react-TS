import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';
import { RoutesProps } from '../types/types';

const RestrictedRoute: FC<RoutesProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
