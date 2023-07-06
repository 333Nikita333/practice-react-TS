import { FC, FormEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Movie } from '../types/types';
import { getSearchMovie } from '../services/movieSearchAPI';
import SearchBar from '../components/SearchBar/SearchBar';
import { Notification } from '../components/MovieList/MovieList.styled';
import Skeleton from '../components/Skeleton/Skeleton';
import MovieList from '../components/MovieList/MovieList';

const Movies: FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searched, setSearched] = useState<boolean>(false);
  const [noResults, setNoResults] = useState<boolean>(false);
  const movieName = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setNoResults(false);

    if (movieName) {
      setIsLoading(true);
      setSearched(true);

      getSearchMovie(movieName)
        .then(movies => {
          setMovies(movies);
          if (movies.length === 0) {
            setNoResults(true);
          }
          setIsLoading(false);
        })
        .catch(console.log);
    }
  }, [movieName]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const query = (
      e.currentTarget.elements.namedItem('name') as HTMLInputElement
    )?.value;
    const nextParams: { query?: string } = query !== '' ? { query } : {};

    if (query === '') {
      toast.error('Please enter your request');
    }

    setSearchParams(nextParams);

    e.currentTarget.reset();
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {searched && noResults && (
        <Notification>No results found for your search query</Notification>
      )}

      {searched && !noResults && (
        <>{isLoading ? <Skeleton /> : <MovieList movies={movies} />}</>
      )}
    </>
  );
};

export default Movies;
