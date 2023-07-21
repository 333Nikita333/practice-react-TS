import { FC } from 'react';
import { CiLogout } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import { logOut } from '../../redux/auth/operations';
import { AppDispatch } from '../../redux/store';
import { Avatar, Button, UserName, Wrapper } from './UserMenu.styled';

const UserMenu: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { user } = useAuth();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserName>
        <Avatar
          width={40}
          height={40}
          src="https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg"
          alt="user avatar"
        />
        Welcome, {user.email}
      </UserName>
      <Button type="button" onClick={onLogOut}>
        <CiLogout size={25} />
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
