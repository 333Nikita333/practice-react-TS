import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { HomeContent } from '../components/HomeContent/HomeContent';

const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>

      <HomeContent />
    </>
  );
};

export default Home;
