import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { logOutThunk } from '../../redux/user/userOperations';
import { selectIsLoading } from '../../redux/user/userSelectors';
import { BtnLogOut, IconLogOut } from './LogOutBtn.styled';
import sprite from '../../assets/sprite.svg';

export const LogOutBtn = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleLogOutClick = async () => {
    try {
      const logoutPromise = dispatch(logOutThunk()).unwrap();
      await toast.promise(logoutPromise, {
        loading: 'Logging out...',
        success: 'Logout successful!',
        error: (error) => error,
      });
    } catch (error) {}
  };

  return (
    <BtnLogOut
      type="button"
      onClick={handleLogOutClick}
      disabled={isLoading}
      aria-label="logout"
    >
      <IconLogOut>
        <use href={sprite + '#icon-logout'}></use>
      </IconLogOut>
    </BtnLogOut>
  );
};
