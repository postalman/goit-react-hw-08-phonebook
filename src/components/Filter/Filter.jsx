import { setFilter } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts"
    />
  );
};

export default Filter;
