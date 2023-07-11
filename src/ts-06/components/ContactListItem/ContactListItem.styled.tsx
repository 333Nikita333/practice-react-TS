import styled, { keyframes } from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { CgSpinner } from 'react-icons/cg';

export const UserIcon = styled(FaUserCircle)`
  width: 50px;
`;
UserIcon.defaultProps = {
  size: 50,
};

const spin = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(1turn);
}
`;

export const Spinner = styled(CgSpinner)`
  animation: ${spin} 0.85s linear infinite;
`;
Spinner.defaultProps = {
  size: 40,
};

export const ContactInfo = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
export const Button = styled.button`
  padding: 5px;
  border-color: #000000;
  border-radius: 50%;

  &:hover {
    border-color: red;
  }
  &:hover svg {
    fill: red;
  }

  & svg {
    fill: #000000;
  }
`;
export const Name = styled.span`
  color: #000000;
`;
export const Number = styled.span`
  color: #560bad;
`;
