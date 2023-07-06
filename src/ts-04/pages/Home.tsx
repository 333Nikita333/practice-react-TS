import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieList from '../components/MovieList/MovieList';
import Skeleton from '../components/Skeleton/Skeleton';
import { getTrendingMovies } from '../services/movieSearchAPI';
import { Movie } from '../types/types';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Home: FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTrendingMovies()
      .then((data: Movie[]) => {
        setTrendingMovies(data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {isLoading ? <Skeleton /> : <MovieList movies={trendingMovies} />}
    </>
  );
};

export default Home;
