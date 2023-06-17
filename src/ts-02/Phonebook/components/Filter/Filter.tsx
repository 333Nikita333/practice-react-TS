import { Component } from 'react';
import { IFilterProps } from '../../interfaces/interfaces';
import { InputFilter, LabelFilter } from './Filter.styled';

class Filter extends Component<IFilterProps> {
  render() {
    const { onChange, filter } = this.props;

    return (
      <LabelFilter>
        <span>Find contacts by name</span>
        <InputFilter
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </LabelFilter>
    );
  }
}

export default Filter;
