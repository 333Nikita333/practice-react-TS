export type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export type MoviesResponse = {
  results: Movie[];
};

//! getDetails
type Genre = {
  id: number;
  name: string;
};

export type MovieDetailsResponse = {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: string;
  overview: string;
  genres: Genre[];
};

//! getCast
export type Actor = {
  cast_id: number;
  profile_path: string;
  name: string;
  character: string;
};
export type MovieCastResponse = {
  cast: Actor[];
};

//! getReview
export type Review = {
  id: string;
  author: string;
  content: string;
};
export type MovieReviewResponse = {
  results: Review[];
  total_results: number;
};

//! getTrailer
export type TrailerType = {
  type: string;
  key: string;
};
export type MovieVideosResponse = {
  results: TrailerType[];
};

export type TypeRequest = {
  [key: string]: string;
};

export type Options = {
  params: {
    query?: string;
    language: string;
    include_adult: boolean;
  };
  headers: {
    Authorization: string;
    'Content-Type': string;
  };
};

export type MovieDetailsParams = {
  movieId: string;
};
