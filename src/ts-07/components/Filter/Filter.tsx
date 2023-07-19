import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filrer/slice';
import { selectFilter } from 'redux/filrer/selectors';
import { LabelFilter, InputFilter } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function handleInputChange(e) {
    dispatch(filterContacts(e.target.value));
  }

  return (
    <LabelFilter>
      <span>Find contacts by name</span>
      <InputFilter
        type="text"
        name="filter"
        placeholder='Search...'
        value={filter}
        onChange={handleInputChange}
      />
    </LabelFilter>
  );
};

export default Filter;
