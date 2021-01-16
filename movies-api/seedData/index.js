import userModel from '../api/users/userModel';

import movieModel from '../api/movies/movieModel';

import {movies} from './movies.js';

import upcomingModel from "../api/upcoming/upcomingModel";

import {upcoming} from "./upcoming.js";

import allMovieModel from "../api/allMovies/allMovieModel";

import {allMovies} from "./allMovies.js";

import topRatedModel from "../api/topRatedMovies/topRatedModel";

import {topRated} from "./topRated.js";

const users = [
  {
    'username': 'user1',
    'password': 'test1',
  },
  {
    'username': 'user2',
    'password': 'test2',
  },
];

export async function loadUsers() {
    console.log('load user Data');
      try {
        await userModel.deleteMany();
        await users.forEach(user => userModel.create(user));
        console.info(`${users.length} users were successfully stored.`);
      } catch (err) {
        console.error(`failed to Load user Data: ${err}`);
      }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadUpcoming() {
  console.log('load seed data');
  console.log(upcoming.length);
  try {
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(upcoming);
    console.info(`${upcoming.length} Upcoming Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadTopRated() {
  console.log('load seed data');
  console.log(topRated.length);
  try {
    await topRatedModel.deleteMany();
    await topRatedModel.collection.insertMany(topRated);
    console.info(`${topRated.length} Top Rated Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

export async function loadAllMovies() {
  console.log('load seed data');
  console.log(allMovies.length);
  try {
    await allMovieModel.deleteMany();
    await allMovieModel.collection.insertMany(allMovies);
    console.info(`${allMovies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}