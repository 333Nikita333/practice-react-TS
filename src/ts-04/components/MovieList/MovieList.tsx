import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MovieListProps } from '../../types/interfaces';
import { Item, List } from './MovieList.styled';

const MovieList: FC<MovieListProps> = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <div>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={`Poster ${title}`}
                  width="250px"
                  height="375px"
                />
              ) : (
                <span>No poster</span>
              )}
              <b>{title}</b>
            </div>
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default MovieList;
