import { AiFillHome } from 'react-icons/ai';
import { GiBookmarklet } from 'react-icons/gi';
import { useAuth } from 'hooks/useAuth';
import { Nav, Link } from './Navigation.styled';

const Navigation = () => {
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
