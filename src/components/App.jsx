import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Contacts from '../Pages/Contacts';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { PublicRoute } from '../PublicRoute/PublicRoute';
import Home from './Home/Home';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/authSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
