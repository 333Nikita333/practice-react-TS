import { FC } from 'react';
import { Friend } from '../../interfaces/Data';
import { Avatar, FriendItem, Name, Status } from './FriendListItem.styled';

export const FriendListitem: FC<Friend> = ({
  avatar,
  name,
  isOnline,
  id,
}) => {
  return (
    <FriendItem id={id.toString()}>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};
