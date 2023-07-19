import { Helmet } from 'react-helmet';
import { useAuth, useLoaders } from 'hooks';
import LoginForm from 'components/LoginForm';

const Login = () => {
  const { isLoading } = useAuth();
  const { LoaderBig } = useLoaders();
  
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      
      {isLoading && <LoaderBig />}
      <LoginForm />
    </>
  );
};

export default Login;
