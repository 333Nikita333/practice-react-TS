import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../services/movieSearchAPI';
import {
  MovieDetailsParams,
  MovieReviewResponse,
  Review,
} from '../../types/types';
import { List } from './Reviews.styled';

const Reviews: FC = () => {
  const { movieId } = useParams<MovieDetailsParams>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [quantityReviews, setQuantityReviews] = useState(0);

  useEffect(() => {
    getMovieDetails(Number(movieId), 'reviews')
      .then(data => {
        const reviewData = data as MovieReviewResponse;

        setReviews(reviewData.results);
        setQuantityReviews(reviewData.total_results);
      })
      .catch(console.log);
  }, [movieId]);

  if (quantityReviews === 0) {
    return <p>We donn`t any reviews for this movie.</p>;
  }

  if (quantityReviews > 0) {
    return (
      <List>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <b>Author: {author}</b>
            <p>{content}</p>
          </li>
        ))}
      </List>
    );
  }
};

export default Reviews;
