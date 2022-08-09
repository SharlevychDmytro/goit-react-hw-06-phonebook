import { useSelector, useDispatch } from 'react-redux';
import { Label } from 'components/Filter/Filter.styled';
import { changeFilter } from 'redux/userSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Label>
  );
};
