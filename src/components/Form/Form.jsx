import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormContact, Input, Label } from 'components/Form/Form.styled';
import { Formik } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

export const FormContacts = ({ onSubmit }) => {
  const formSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    onSubmit(values);
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

FormContacts.propTypes = {
  onSubmit: PropTypes.func,
};
