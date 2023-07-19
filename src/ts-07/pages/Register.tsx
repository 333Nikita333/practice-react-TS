import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm';
import { useAuth, useLoaders } from 'hooks';

const Register = () => {
  const { isLoading } = useAuth();
  const { LoaderBig } = useLoaders();

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      {isLoading && <LoaderBig />}
      <RegisterForm />
    </>
  );
};

export default Register;
