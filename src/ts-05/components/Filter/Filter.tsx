import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';
import { InputFilter, LabelFilter } from './Filter.styled';
import { ChangeEvent, FC } from 'react';
import { RootState } from '../../types/interfaces';

const Filter: FC = () => {
  const dispatch = useDispatch();
  const filter: string = useSelector((state: RootState) => getFilter(state));

  function handleInputChange(e: ChangeEvent<HTMLInputElement>): void {
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
