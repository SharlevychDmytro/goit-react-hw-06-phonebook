import { useState, useEffect, useRef } from 'react';
import { Box } from 'components/Box';
import { FormContacts } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const firstRender = useRef(true);

  useEffect(() => {
    const contact = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contact);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = contact => {
    const some = contacts.some(
      cont => cont.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (some) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    setContacts([contact, ...contacts]);
  };

  const filterChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  return (
    <Box bg="background" display="flex" flexDirection="column">
      <h1>Phonebook</h1>
      <FormContacts onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={filterChange} />
      <ContactsList contacts={getVisibleContacts()} onDelite={deleteContact} />
    </Box>
  );
};
