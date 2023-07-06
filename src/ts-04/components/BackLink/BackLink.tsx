import { FC } from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { BackLinkProps } from '../../types/interfaces';
import { StyledLink, Wrapper } from './BackLink.styled';

const BackLink: FC<BackLinkProps> = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <Wrapper>
        <HiArrowLeft size="24" />
        {children}
      </Wrapper>
    </StyledLink>
  );
};

export default BackLink;
