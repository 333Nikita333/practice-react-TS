import { FC } from 'react';
import { IStatisticProps } from '../../interfaces/interfaces';
import { Notification } from '../Notification/Notification';
import {
  StatBad,
  StatGood,
  StatList,
  StatNeutral,
  StatTotal,
  StatisticsBox,
  Title,
} from './Statistics.styled';

export const Statistics: FC<IStatisticProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total > 0 ? (
    <StatisticsBox>
      <Title>Statistics</Title>
      <StatList>
        <StatGood>Good: {good}</StatGood>
        <StatNeutral>Neutral: {neutral}</StatNeutral>
        <StatBad>Bad: {bad}</StatBad>
        <StatTotal>Total: {total}</StatTotal>
        <li>Positive feedback: {positivePercentage}%</li>
      </StatList>
    </StatisticsBox>
  ) : (
    <Notification message="There is no feedback" />
  );
};
