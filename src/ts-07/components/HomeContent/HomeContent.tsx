import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Container, TitleWrapper } from './HomeContent.styled';

export const HomeContent: FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <TitleWrapper>
      <Container>
        {!isLoggedIn ? (
          <>
            {' '}
            <span>Welcome, please</span>
            <NavLink to="/register">Register</NavLink>
            <span>or</span>
            <NavLink to="/login">Log in</NavLink>{' '}
            <span>to use the phonebook</span>
          </>
        ) : (
          <p>
            Please go to {<Link to="/contacts">Contacts</Link>} to use the app
          </p>
        )}
      </Container>
    </TitleWrapper>
  );
};
