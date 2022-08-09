import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { FormContact, Input, Label } from 'components/Form/Form.styled';
import { Formik } from 'formik';
import { addContact } from 'redux/userSlice';

const initialValues = {
  name: '',
  number: '',
};

export const FormContacts = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);

  const formSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    const some = items.some(
      cont => cont.name.toLowerCase() === values.name.toLowerCase()
    );
    if (some) {
      alert(`${values.name} is already in contacts`);
      resetForm();
      return;
    }
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={formSubmit}>
      <FormContact>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <button type="submit">Add contact</button>
      </FormContact>
    </Formik>
  );
};
