import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../types/interfaces';
import { InputFilter, LabelFilter } from './Filter.styled';

const Filter = () => {
  const dispatch: AppDispatch = useDispatch();
  const filter: string = useSelector((state: RootState) => selectFilter(state));

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
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
