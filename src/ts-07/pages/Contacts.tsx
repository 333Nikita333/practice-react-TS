import { Helmet } from 'react-helmet';
import ContactsBar from 'components/ContactsBar';
import { useAuth, useLoaders } from 'hooks';

const Contacts = () => {
  const { isLoading } = useAuth();
  const { LoaderBig } = useLoaders();

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      {isLoading && <LoaderBig />}
      <ContactsBar />
    </>
  );
};

export default Contacts;
