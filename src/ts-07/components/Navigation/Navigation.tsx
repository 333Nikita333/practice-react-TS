import { FC } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GiBookmarklet } from 'react-icons/gi';
import { useAuth } from '../../hooks';
import { Link, Nav } from './Navigation.styled';

const Navigation: FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">
        <AiFillHome />
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          <GiBookmarklet /> Contacts
        </Link>
      )}
    </Nav>
  );
};

export default Navigation;
