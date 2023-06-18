import { Component, MouseEvent } from 'react';
import { toast } from 'react-toastify';
import { fetchImagesByName } from '../../services/imagesApi';
import { IImageGalleryProps, IImageGalleryState } from '../../types/interfaces';
import { FetchImagesResponse, ImageData, StatusType } from '../../types/types';
import ButtonLoadMore from '../ButtonLoadMore/ButtonLoadMore';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import { ImageGalleryBox } from './ImageGallery.styled';

const Status: StatusType = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component<IImageGalleryProps, IImageGalleryState> {
  state: IImageGalleryState = {
    status: Status.IDLE,
    error: null,
    page: 1,
    images: [],
    totalHits: null,
  };

  async componentDidUpdate(prevProps: IImageGalleryProps): Promise<void> {
    try {
      const prevImgName: string = prevProps.searchQuery;
      const nextImgName: string = this.props.searchQuery;

      if (prevImgName !== nextImgName) {
        this.setState({
          images: [],
          page: 1,
          status: Status.PENDING,
        });

        const images: FetchImagesResponse = await fetchImagesByName(
          1,
          nextImgName
        );
        const { totalHits, hits } = images;

        this.setState({
          page: this.state.page + 1,
          status: Status.RESOLVED,
          images: hits,
          totalHits,
        });
        if (totalHits > 0 && totalHits <= 10) {
          toast.warning("Sorry, there's nothing more to show");
          return;
        }
        if (totalHits > 0) {
          toast.success(`Success! Found ${totalHits} images`);
          return;
        }
        if (totalHits === 0) {
          toast.error(`Oops! Nothing found. Enter another request`);
          return;
        }
      }
    } catch (error: unknown) {
      this.setState({
        error: error as Error,
        status: Status.REJECTED,
      });
    }
  }

  onBtnLoadMore = (): void => {
    const imgQuery: string = this.props.searchQuery;
    const nextPage: number = this.state.page;

    this.setState({
      status: Status.PENDING,
    });

    fetchImagesByName(nextPage, imgQuery)
      .then(nextImages => {
        this.setState({
          page: this.state.page + 1,
          status: Status.RESOLVED,
          images: [...this.state.images, ...nextImages.hits],
        });

        const { totalHits, hits } = nextImages;
        const { images } = this.state;
        if (
          totalHits === images.length ||
          totalHits < images.length + hits.length
        ) {
          toast.error(`Sorry we have nothing more to show you.`);
        }
      })
      .catch((error: unknown) =>
        this.setState({
          error: error as Error,
          status: Status.REJECTED,
        })
      );
  };

  onCardClick = (e: MouseEvent<HTMLUListElement>): void => {
    if (e.currentTarget !== e.target) {
      const currentImageUrl: string = (e.target as HTMLImageElement).currentSrc;
      const imageArr: ImageData[] = this.state.images.filter(
        ({ webformatURL }) => webformatURL === currentImageUrl
      );
      const largeImageURL: string = imageArr[0].largeImageURL;
      const imageTags: string = imageArr[0].tags;

      this.props.onCardClick(largeImageURL, imageTags);
      this.props.onOpenModal();
    }
  };

  render() {
    const { status, images, totalHits } = this.state;

    return (
      <>
        <ImageGalleryBox onClick={this.onCardClick}>
          {images.map(({ id, webformatURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                tags={tags}
              />
            );
          })}
        </ImageGalleryBox>
        {status === Status.RESOLVED &&
          totalHits !== null &&
          images.length !== totalHits &&
          images.length < totalHits && (
            <ButtonLoadMore onBtnLoadMore={this.onBtnLoadMore} />
          )}
        {status === Status.PENDING && <Loader />}
      </>
    );
  }
}

export default ImageGallery;
