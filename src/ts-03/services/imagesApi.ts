import axios, { AxiosResponse } from 'axios';
import { FetchImagesResponse, SearchParams } from '../types/types';

export const fetchImagesByName = async (
  pageNum = 1,
  searchQuerry = ''
): Promise<FetchImagesResponse> => {
  const BASE_URL = 'https://pixabay.com/api/';
  const params: SearchParams = {
    key: '32850329-b1ad59fa6423bb8f4069942ac',
    q: searchQuerry,
    image_type: 'photo',
    page: pageNum,
    orientation: 'horizontal',
    per_page: 12,
  };
  const response: AxiosResponse<FetchImagesResponse> = await axios.get(
    BASE_URL,
    { params }
  );
  return response.data;
};
