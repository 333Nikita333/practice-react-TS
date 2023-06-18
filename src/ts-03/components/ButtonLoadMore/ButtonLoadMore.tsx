import { Component } from 'react';
import { Button } from './ButtonLoadMore.styled';
import { IButtonLoadMoreProps } from '../../types/interfaces';

class ButtonLoadMore extends Component<IButtonLoadMoreProps> {
  render() {
    const { onBtnLoadMore } = this.props;

    return (
      <Button type="button" onClick={onBtnLoadMore}>
        Load More
      </Button>
    );
  }
}

export default ButtonLoadMore;
