import PropTypes from 'prop-types';

export const ContactsItem = ({ id, name, number, onDelite }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelite(id)}>Удалить</button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelite: PropTypes.func,
};
