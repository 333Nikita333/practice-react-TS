import { FC, Suspense, useState, useEffect, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { MovieDetailsParams, MovieDetailsResponse } from '../types/types';
import { getMovieDetails } from '../services/movieSearchAPI';
import {
  Container,
  MovieDescription,
  MovieInfo,
  StyledLink,
} from '../components/MovieDetails/MovieDetails.styled';
import BackLink from '../components/BackLink/BackLink';

const MovieDetails: FC = () => {
  const { movieId } = useParams<MovieDetailsParams>();
  const [movieDetails, setMovieDetails] = useState<MovieDetailsResponse | null>(
    null
  );
  const location = useLocation();
  const backLinkHref = useRef<string>(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(Number(movieId), 'details')
      .then(data => setMovieDetails(data as MovieDetailsResponse))
      .catch(console.log);
  }, [movieId]);

  if (!movieDetails) return <h2>Loading...</h2>;

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails as MovieDetailsResponse;

  return (
    <Container>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      <MovieInfo>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="300px"
          height="440px"
        />
        <MovieDescription>
          <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
          <p>User Score: {Math.round(+vote_average) * 10}%</p>
          <b>Overview:</b>
          <p>{overview}</p>
          <b>Genres:</b>
          {genres.length === 0 ? (
            <p>No genres</p>
          ) : (
            <p>{genres.map(({ name }) => name).join(', ')}</p>
          )}

          <h2>Additional Information</h2>
          <ul>
            <li>
              <StyledLink to="cast" state={{ from: backLinkHref }}>
                Cast
              </StyledLink>
            </li>
            <li>
              <StyledLink to="reviews" state={{ from: backLinkHref }}>
                Reviews
              </StyledLink>
            </li>
            <li>
              <StyledLink to="trailer" state={{ from: backLinkHref }}>
                Trailer
              </StyledLink>
            </li>
          </ul>
        </MovieDescription>
      </MovieInfo>

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
