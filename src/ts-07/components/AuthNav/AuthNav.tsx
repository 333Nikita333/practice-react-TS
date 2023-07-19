import { FaRegRegistered } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';
import { AuthLink, Wrapper } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Wrapper>
      <AuthLink to="/register">
        <FaRegRegistered /> Register
      </AuthLink>
      <AuthLink to="/login">
        <BiLogInCircle /> Log in
      </AuthLink>
    </Wrapper>
  );
};

export default AuthNav;
