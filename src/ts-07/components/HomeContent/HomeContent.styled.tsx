import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
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
