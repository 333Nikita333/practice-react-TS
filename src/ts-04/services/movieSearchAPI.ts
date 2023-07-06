import axios, { AxiosResponse } from 'axios';
import {
  Movie,
  Options,
  TypeRequest,
  MoviesResponse,
  MovieDetailsResponse,
  MovieCastResponse,
  MovieReviewResponse,
  MovieVideosResponse,
} from '../types/types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTgwN2RlOWE5YjEzNTg0ZjNhNzFlNjM0M2RkYjRjZSIsInN1YiI6IjYzZDNmYjQyZjE0ZGFkMDBiZDQ4MjE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b3kkZc4VCGcVeJvumOr9cUF9SnkSJkGMQsfEBPaQeCI';

export async function getTrendingMovies(): Promise<Movie[]> {
  const typeRequest: TypeRequest = {
    trends: 'trending/movie/week',
  };

  const options: Options = {
    params: {
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequest.trends}`;
  const response: AxiosResponse<MoviesResponse> = await axios.get(url, options);

  return response.data.results;
}

export async function getSearchMovie(searchQuery = ''): Promise<Movie[]> {
  const typeRequest: TypeRequest = {
    search: 'search/movie',
  };

  const options: Options = {
    params: {
      query: searchQuery,
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequest.search}`;
  const response: AxiosResponse<MoviesResponse> = await axios.get(url, options);

  return response.data.results;
}

export async function getMovieDetails(
  movieId: number,
  type: 'details' | 'credits' | 'reviews' | 'videos' = 'details'
): Promise<
  | MovieDetailsResponse
  | MovieCastResponse
  | MovieReviewResponse
  | MovieVideosResponse
> {
  const typeRequestById = {
    details: `movie/${movieId}`,
    credits: `movie/${movieId}/credits`,
    reviews: `movie/${movieId}/reviews`,
    videos: `movie/${movieId}/videos`,
  };
  const options: Options = {
    params: {
      language: 'en-US',
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
  };
  const url = `${BASE_URL}${typeRequestById[type]}`;
  const response: AxiosResponse<
    | MovieDetailsResponse
    | MovieCastResponse
    | MovieReviewResponse
    | MovieVideosResponse
  > = await axios.get(url, options);

  return response.data;
}
