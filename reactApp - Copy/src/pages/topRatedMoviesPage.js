import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToFavoritesButton from '../components/buttons/addToFavoritesTopRated'

const TopRatedMovieListPage = () => {
  const context = useContext(MoviesContext);

  const topRated = context.topRated.filter((m) => {  
    return !("favorite" in m);
  });

  return (
      <PageTemplate 
        title='No. Movies'
        movies={topRated}  
        action={(topRated) => {
          // return <AddToFavoritesButton movie={topRated} /> 
        }}
      />
  );
};

export default TopRatedMovieListPage;