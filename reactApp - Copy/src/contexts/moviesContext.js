import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies, getUpcoming, getTopRated} from "../api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated]
     };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], topRated: [...state.topRated]};
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], topRated: [...state.topRated]};
      case "load-topRated":
      return { topRated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming]};
    case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
        topRated: [...state.topRated]
      };
      case "add-favoriteTopRated":
        return{
          topRated: state.topRated.map((m) =>
          m.id === action.payload.topRated.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated]
        };
    default:
      return state;
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], topRated: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getMovies().then(movies => {
      console.log(movies);
      dispatch({ type: "load", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getUpcoming().then(movies => {
      console.log(movies);
      dispatch({ type: "load-upcoming", payload: {movies}});
    });
  },[]);

  useEffect(() => {
    getTopRated().then(movies => {
      console.log(movies);
      dispatch({ type: "load-topRated", payload: {movies}});
    });
  },[]);

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addToWatchlist = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  };

  const addToFavoritesFromTopRated = (movieId) => {
    const index = state.topRated.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favoriteTopRated", payload: { movie: state.topRated[index] } });
  };

  // useEffect(() => {
  //   getFavourites().then(movies => {
  //     console.log(movies);
  //     dispatch({ type: "load-upcoming", payload: {movies}});
  //   });
  // },[]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        topRated: state.topRated,
        addToFavorites: addToFavorites,
        addToWatchlist: addToWatchlist,
        addToFavoritesFromTopRated: addToFavoritesFromTopRated,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider