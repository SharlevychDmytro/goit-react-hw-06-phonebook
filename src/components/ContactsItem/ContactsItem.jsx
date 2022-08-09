import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/userSlice';

export const ContactsItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))}>Удалить</button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
