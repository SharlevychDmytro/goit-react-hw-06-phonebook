import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { FormContacts } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { addContact } from 'redux/userSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const { items, filter } = contacts;

  const formSubmit = contact => {
    const some = items.some(
      cont => cont.name.toLowerCase() === contact.name.toLowerCase()
    );
    if (some) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(contact));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Box bg="background" display="flex" flexDirection="column">
      <h1>Phonebook</h1>
      <FormContacts onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList contacts={getVisibleContacts()} />
    </Box>
  );
};
