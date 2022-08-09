import { useSelector } from 'react-redux';
import { ContactsItem } from 'components/ContactsItem/ContactsItem';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const { items, filter } = contacts;

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ul>
      {getVisibleContacts().map(({ id, name, number }) => (
        <ContactsItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
};
