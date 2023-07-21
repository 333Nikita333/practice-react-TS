import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Loader } from '../components/Loader/Loader';
import LoginForm from '../components/LoginForm/LoginForm';
import { useAuth } from '../hooks';

const Login: FC = () => {
  const { isLoading } = useAuth();

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      {isLoading && <Loader />}
      <LoginForm />
    </>
  );
};

export default Login;
