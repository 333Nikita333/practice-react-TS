import { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filrer/selectors';
import { filterContacts } from '../../redux/filrer/slice';
import { AppDispatch } from '../../redux/store';
import { RootState } from '../../types/interfaces';
import { InputFilter, LabelFilter } from './Filter.styled';

const Filter: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const filter: string = useSelector((state: RootState) => selectFilter(state));

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(filterContacts(e.target.value));
  }

  return (
    <LabelFilter>
      <span>Find contacts by name</span>
      <InputFilter
        type="text"
        name="filter"
        placeholder="Search..."
        value={filter}
        onChange={handleInputChange}
      />
    </LabelFilter>
  );
};

export default Filter;
