import './App.css';
import React, {useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { nanoid } from 'nanoid';
import styled from '@emotion/styled';

const StyledHeader = styled.h1({
  marginLeft: 5,
});

function App(props){
  const [contacts, setContacts] = useState([]);
  const [filter, filterContacts] = useState("");

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      setContacts( parsedContacts);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])
  
  const deleteContact = key => {
    setContacts(contacts.filter(contact => contact.id !== key));
  };

  const addContact = (name, number) => {
    const contact = { name: name, number: number, id: nanoid() };
    const foundContant = contacts.find(contact => contact.name === name);
    if (foundContant) {
      alert(name + ' is already in contacts');
      return;
    }
    setContacts([contact, ...contacts]);
  };

  const handleFilter = event => {
    const value = event.target.value;
    if (event.target.name === "filter") filterContacts(value);
  };

  return (
    <div>
      <StyledHeader>Phonebook</StyledHeader>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList
        list={contacts}
        filter={filter}
        onClick={deleteContact}
      />
    </div>
  );
}

export default App;
