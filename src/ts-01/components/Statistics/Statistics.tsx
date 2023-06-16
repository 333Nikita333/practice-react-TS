import { FC } from 'react';
import { Data } from '../../interfaces/Data';
import {
  ItemLabel,
  ItemPercentage,
  StatisticsItem,
  StatisticsList,
  StatisticsSection,
  StatisticsTitle,
} from './Statistics.styled';

interface Stats {
  title: string;
  stats: Data[];
}

export const Statistics: FC<Stats> = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title.toUpperCase()}</StatisticsTitle>}

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id}>
            <ItemLabel>{label}</ItemLabel>
            <ItemPercentage>{percentage}%</ItemPercentage>
          </StatisticsItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};
