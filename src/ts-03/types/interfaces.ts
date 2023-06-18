import { ReactNode } from 'react';
import { ImageData } from './types';

export interface IAppState {
  searchQuery: string;
  imgUrl: string;
  tags: string;
  showModal: boolean;
  buttonDisabled: boolean;
}

export interface ISearchBarProps {
  searchQuery: string;
  onSubmit: (searchQuery: string) => void;
}
export interface ISearchBarState {
  newSearchQuery: string;
}

export interface IImageGalleryProps {
  onCardClick: (largeImageUrl: string, imageTags: string) => void;
  searchQuery: string;
  onOpenModal: () => void;
}
export interface IImageGalleryState {
  status: string;
  error: Error | null;
  page: number;
  images: ImageData[];
  totalHits: number | null;
}

export interface IButtonLoadMoreProps {
  onBtnLoadMore: () => void;
}

export interface IModalProps {
  onCloseModal: () => void;
  children: Readonly<ReactNode>;
}
