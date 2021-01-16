import express from 'express';
import {
  getMovieReviews, getCredits, getSimilarMovies
} from '../tmdb-api';

import allMovieModel from './allMovieModel';

const router = express.Router();

router.get('/', (req, res, next) => {
  allMovieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  allMovieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/credits', (req, res, next) => {
  const id = parseInt(req.params.id);
  getCredits(id)
  .then(credits => res.status(200).send(credits))
  .catch((error) => next(error));
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.get('/:id/similarMovies', (req, res, next) => {
  const id = parseInt(req.params.id);
  getSimilarMovies(id)
  .then(movies => res.status(200).send(movies))
  .catch((error) => next(error));
});

export default router;