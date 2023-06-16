import { FC } from 'react';
import { IFeedbackProps } from '../../interfaces/interfaces';
import { Button, ButtonList } from './Feedback.styled';

export const FeedbackOptions: FC<IFeedbackProps> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <li key={option}>
            <Button type="button" onClick={onLeaveFeedback}>
              {option}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};
