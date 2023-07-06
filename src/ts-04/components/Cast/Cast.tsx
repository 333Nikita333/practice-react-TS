import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/movieSearchAPI';
import {
  Actor,
  MovieCastResponse,
  MovieDetailsParams,
} from '../../types/types';
import { List } from './Cast.styled';

const Cast: FC = () => {
  const { movieId } = useParams<MovieDetailsParams>();

  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    getMovieDetails(Number(movieId), 'credits')
      .then(cast => setActors((cast as MovieCastResponse).cast))
      .catch(console.log);
  }, [movieId]);

  return (
    <>
      <List>
        {actors.map(({ cast_id, profile_path, name: actorName, character }) => (
          <li key={cast_id}>
            {!profile_path ? (
              <span>No photo</span>
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={actorName}
                width="100"
              />
            )}
            <b>{actorName}</b>
            <p>{character}</p>
          </li>
        ))}
      </List>
    </>
  );
};

export default Cast;
