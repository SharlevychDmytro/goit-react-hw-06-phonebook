import { Box } from 'components/Box';
import { FormContacts } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const App = () => {
  return (
    <Box bg="background" display="flex" flexDirection="column">
      <h1>Phonebook</h1>
      <FormContacts />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Box>
  );
};
