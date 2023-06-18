import { ChangeEvent, Component, FormEvent } from 'react';
import { GoSearch } from 'react-icons/go';
import { toast } from 'react-toastify';
import { ISearchBarProps, ISearchBarState } from '../../types/interfaces';
import {
  SearchButton,
  SearchForm,
  SearchbarBox,
  SearchbarInput,
} from './Searchbar.styled';

class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  state: ISearchBarState = {
    newSearchQuery: '',
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      newSearchQuery: e.currentTarget.value.trim(),
    });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newImageQuery: string = this.state.newSearchQuery;

    if (newImageQuery === '') {
      toast.warning('Please enter a search term');
      return;
    }

    if (newImageQuery === this.props.searchQuery) {
      toast.info('Enter another request');
      return;
    }

    this.props.onSubmit(newImageQuery);
    this.setState({
      newSearchQuery: '',
    });
  };

  render() {
    const { newSearchQuery } = this.state;

    return (
      <SearchbarBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <GoSearch />
          </SearchButton>

          <SearchbarInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={newSearchQuery}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarBox>
    );
  }
}

export default SearchBar;
