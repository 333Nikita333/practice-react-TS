import { FC } from 'react';
import { BiLogInCircle } from 'react-icons/bi';
import { FaRegRegistered } from 'react-icons/fa';
import { AuthLink, Wrapper } from './AuthNav.styled';

const AuthNav: FC = () => {
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
