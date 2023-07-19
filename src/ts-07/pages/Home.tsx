import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';
import { Link, NavLink } from 'react-router-dom';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  max-width: 400px;

  font-size: 35px;
  border: solid 1px #000;
  border-radius: 15px;
  background: rgb(227, 227, 227);
  box-shadow: rgb(200, 200, 200) 16px 16px 32px,
    rgb(254, 254, 254) -16px -16px 32px;
  animation: 0.5s ease 0s 1 normal none running jgQpwH;

  & a {
    padding: 5px;
    border: solid 1px #000;
    border-radius: 15px;
  }
`;

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>

      {!isLoggedIn ? (
        <TitleWrapper>
          <Container>
            <span>Welcome, please</span>
            <NavLink to="/register">Register</NavLink>
            <span>or</span>
            <NavLink to="/login">Log in</NavLink>{' '}
            <span>to use the phonebook</span>
          </Container>
        </TitleWrapper>
      ) : (
        <TitleWrapper>
          <Container>
            Please go to {<Link to="/contacts">Contacts</Link>} to use the app
          </Container>
        </TitleWrapper>
      )}
    </>
  );
};

export default Home;
