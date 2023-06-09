import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import { StyledNavigation, StyledNavUl } from './StyledNavigation';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <StyledNavigation>
      <StyledNavUl>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        {isLoggedIn && (
          <li>
            <UserMenu />
          </li>
        )}
      </StyledNavUl>
    </StyledNavigation>
  );
};

export default Navigation;
