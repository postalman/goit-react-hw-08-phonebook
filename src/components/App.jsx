import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './Navigation/Navigation';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Contacts from '../Pages/Contacts';
import { getCurrentUser } from '../redux/authSlice';
import { fetchContacts } from '../redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser()).then(action => {
      if (action.type === getCurrentUser.fulfilled.type) {
        dispatch(fetchContacts());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          {/* <Route exact path="/" element={Home} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
