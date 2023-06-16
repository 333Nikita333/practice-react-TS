import { FC } from 'react';
import { ISectionFeedbackProps } from '../../interfaces/interfaces';
import { SectionFeedback, Title } from './Section.styled';

export const Section: FC<ISectionFeedbackProps> = ({ title, children }) => {
  return (
    <SectionFeedback>
      <Title>{title}</Title>
      {children}
    </SectionFeedback>
  );
};
