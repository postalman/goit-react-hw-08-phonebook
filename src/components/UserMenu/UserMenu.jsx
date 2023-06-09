import { logoutUser } from '../../redux/authSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <>
        <p>
          {user.name} and {user.email}
        </p>
        <button onClick={handleLogout}>Logout</button>
      </>
    </div>
  );
};

export default UserMenu;
