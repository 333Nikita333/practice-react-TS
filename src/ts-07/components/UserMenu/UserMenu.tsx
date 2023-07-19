import { useDispatch } from 'react-redux';
import { CiLogout } from 'react-icons/ci';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserName, Wrapper, Button, Avatar } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
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
