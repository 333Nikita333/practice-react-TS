import { FC } from 'react';
import { Friend } from '../../interfaces/Data';
import { FriendListitem } from '../FriendListItem/FriendListItem';
import { Friends } from './FriendList.styled';

interface FriendList {
  friends: Friend[];
}

export const FriendList: FC<FriendList> = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListitem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </Friends>
  );
};
