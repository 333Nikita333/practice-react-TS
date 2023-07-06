import { FC } from 'react';
import styled from 'styled-components';

const Notification = styled.b`
  display: block;
  margin: 20px auto 0;
  font-size: 20px;
  width: 200px;
`;

const NotFound: FC = () => {
  return <Notification>File not dound</Notification>;
};

export default NotFound;
