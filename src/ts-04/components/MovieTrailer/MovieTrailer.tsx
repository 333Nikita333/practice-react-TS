import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/movieSearchAPI';
import { MovieDetailsParams, MovieVideosResponse } from '../../types/types';
import { MovieTrailerBox, Trailer } from './MovieTrailer.styled';

const MovieTrailer: FC = () => {
  const { movieId } = useParams<MovieDetailsParams>();
  const [trailer, setTrailer] = useState<string | null>(null);

  useEffect(() => {
    getMovieDetails(Number(movieId), 'videos')
      .then(data => {
        const video = (data as MovieVideosResponse).results.filter(
          item => item.type === 'Trailer'
        )[0];

        if (video) {
          setTrailer(`https://www.youtube.com/embed/${video.key}`);
        }
      })
      .catch(console.log);
  }, [movieId, trailer]);

  return (
    <MovieTrailerBox>
      <Trailer url={trailer} width="70%" height="70%" controls={true} />
    </MovieTrailerBox>
  );
};

export default MovieTrailer;
