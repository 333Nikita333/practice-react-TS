import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { LabelFilter, InputFilter } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function handleInputChange(e) {
    dispatch(onChangeFilter(e.target.value));
  }

  return (
    <LabelFilter>
      <span>Find contacts by name</span>
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputChange}
      />
    </LabelFilter>
  );
};

export default Filter;
