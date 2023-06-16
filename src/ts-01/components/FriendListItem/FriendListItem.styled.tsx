import styled from '@emotion/styled';

type StatusProps = {
  isOnline: boolean;
};

const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 200px;
  padding: 10px;

  background-color: #ffffff;
  box-shadow: 2px -3px 37px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;
const Status = styled.span<StatusProps>`
  display: block;
  width: 15px;
  height: 15px;

  border-radius: 45em;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;
const Avatar = styled.img`
  display: block;
`;
const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
export { FriendItem, Status, Avatar, Name };
