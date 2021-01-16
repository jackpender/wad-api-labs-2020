import express from 'express';
import {
  getMovieReviews
} from '../tmdb-api';

import topRatedModel from './topRatedModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  topRatedModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  topRatedModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

export default router;