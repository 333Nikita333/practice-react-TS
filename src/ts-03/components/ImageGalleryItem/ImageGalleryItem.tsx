import { Component } from 'react';
import { IImageGalleryItemProps } from '../../types/types';
import { ImageItem } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component<IImageGalleryItemProps> {
  render() {
    const { webformatURL, tags, id } = this.props;

    return (
      <ImageItem id={`${id}`}>
        <img src={webformatURL} alt={tags} />
      </ImageItem>
    );
  }
}

export default ImageGalleryItem;
