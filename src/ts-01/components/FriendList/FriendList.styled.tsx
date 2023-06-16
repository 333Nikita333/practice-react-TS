import styled from '@emotion/styled';

const Friends = styled.ul`
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 0;

  list-style: none;
`;
const Friend = styled.li`
  display: flex;

  box-shadow: 2px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export { Friends, Friend };
