import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Loader } from '../components/Loader/Loader';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import { useAuth } from '../hooks';

const Register: FC = () => {
  const { isLoading } = useAuth();

  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      {isLoading && <Loader />}
      <RegisterForm />
    </>
  );
};

export default Register;
