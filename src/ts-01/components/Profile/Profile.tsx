import { FC } from 'react';
import { User } from '../../interfaces/Data';
import {
  StatsLabel,
  StatsQuantity,
  UserAvatar,
  UserLocation,
  UserName,
  UserProfile,
  UserStats,
  UserTag,
  Userinfo,
} from './Profile.styled';

interface ProfileProps {
  user: User;
}

export const Profile: FC<ProfileProps> = ({ user }) => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = user;

  return (
    <UserProfile>
      <Userinfo>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Userinfo>

      <UserStats>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </li>
      </UserStats>
    </UserProfile>
  );
};
