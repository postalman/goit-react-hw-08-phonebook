import { logoutUser } from '../../redux/authSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {StyledUserMenu} from './StyledUserMenu'

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser())
      .then(() => {
        navigate('/login');
      })
      .catch(error => {
        console.log('Logout error:', error);
      });
  };

  return (
    <StyledUserMenu>
      <p>Welcome, {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </StyledUserMenu>
  );
};

export default UserMenu;
