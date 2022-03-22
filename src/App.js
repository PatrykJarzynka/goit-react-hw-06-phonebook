import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { nanoid } from 'nanoid';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { createAction } from '@reduxjs/toolkit';

const StyledHeader = styled.h1({
  marginLeft: 5,
});

const setContact = createAction('addContact');
const removeContact = createAction('deleteContact');
const filterContacts = createAction('filterContacts');

function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const deleteContact = key => {
    const toDelete = contacts.filter(contact => contact.id !== key);
    dispatch(removeContact(toDelete));
  };

  const addContact = (name, number) => {
    const contact = { name: name, number: number, id: nanoid() };
    const foundContant = contacts.find(contact => contact.name === name);
    if (foundContant) {
      alert(name + ' is already in contacts');
      return;
    }
    dispatch(setContact(contact));
  };

  const handleFilter = event => {
    const value = event.target.value;
    if (event.target.name === 'filter') dispatch(filterContacts(value));
  };

  return (
    <div>
      <StyledHeader>Phonebook</StyledHeader>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={handleFilter} />
      <ContactList list={contacts} filter={filter} onClick={deleteContact} />
    </div>
  );
}

export default App;
