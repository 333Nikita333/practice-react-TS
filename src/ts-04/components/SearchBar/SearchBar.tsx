import { FC } from 'react';
import { GoSearch } from 'react-icons/go';
import { SearchBarProps } from '../../types/interfaces';
import {
  SearchBox,
  SearchButton,
  SearchForm,
  SearchbarInput,
} from './SearchBar.styled';

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  return (
    <SearchBox>
      <SearchForm onSubmit={onSubmit}>
        <SearchbarInput
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <SearchButton>
          <GoSearch />
        </SearchButton>
      </SearchForm>
    </SearchBox>
  );
};

export default SearchBar;
