export type ImageData = {
  id: number;
  tags: string;
  webformatURL: string;
  largeImageURL: string;
  user: string;
};

export type FetchImagesResponse = {
  total: number;
  totalHits: number;
  hits: ImageData[];
};

export type SearchParams = {
  key: string;
  q: string;
  image_type: string;
  page: number;
  orientation: string;
  per_page: number;
};

export type StatusType = Readonly<{
  IDLE: 'idle';
  PENDING: 'pending';
  RESOLVED: 'resolved';
  REJECTED: 'rejected';
}>;

export type IImageGalleryItemProps = Pick<
  ImageData,
  'id' | 'tags' | 'webformatURL'
>;
