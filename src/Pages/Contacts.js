import React, { useEffect } from 'react';
import { DivCSS, BodyDivCSS } from 'components/Styles.styles';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contactsSlice';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <BodyDivCSS>
      <DivCSS>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </DivCSS>
    </BodyDivCSS>
  );
};

export default Contacts;
