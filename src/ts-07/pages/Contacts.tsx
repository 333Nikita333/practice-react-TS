import { FC } from 'react';
import { Helmet } from 'react-helmet';
import ContactsBar from '../components/ContactsBar/ContactsBar';
import { Loader } from '../components/Loader/Loader';
import { useAuth } from '../hooks';

const Contacts: FC = () => {
  const { isLoading } = useAuth();

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      {isLoading && <Loader />}
      <ContactsBar />
    </>
  );
};

export default Contacts;
