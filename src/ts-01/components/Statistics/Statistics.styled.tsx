import styled from '@emotion/styled';
import getRandomColor from './utils/getRandomColor';

const StatisticsSection = styled.section`
  max-width: 600px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 10px 0;

  background-color: #ffffff;
  box-shadow: 2px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;
const StatisticsTitle = styled.h2`
  margin: 0;
  margin-bottom: 0px;
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
const StatisticsList = styled.ul`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const StatisticsItem = styled.li`
  text-align: center;

  display: inline-flex;
  flex-basis: calc((100% / 5) - 20px - 2px);
  flex-direction: column;
  padding: 10px;

  text-align: center;
  background-color: ${getRandomColor};
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;
const ItemLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
`;
const ItemPercentage = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export {
  StatisticsSection,
  StatisticsList,
  StatisticsTitle,
  StatisticsItem,
  ItemLabel,
  ItemPercentage,
};
