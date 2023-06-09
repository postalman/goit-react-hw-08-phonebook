import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Contacts from '../Pages/Contacts';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import Home from './Home/Home';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/authSlice';

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <>
        <Navigation />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
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
    </Router>
  );
};

export default App;
