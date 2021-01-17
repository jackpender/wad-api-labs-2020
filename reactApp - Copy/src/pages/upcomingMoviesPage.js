import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchlistButton from '../components/buttons/addToWatchlist'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const upcoming = context.upcoming

  return (
      <PageTemplate 
        title='No. Movies'
        movies={upcoming}
        action={(upcoming) => {
          return <AddToWatchlistButton movie={upcoming} /> 
        }}
      />
  );
};

export default MovieListPage;