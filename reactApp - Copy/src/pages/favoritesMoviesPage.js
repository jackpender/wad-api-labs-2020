import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import {MoviesContext} from '../contexts/moviesContext'

// import {getUserFavourites} from "../api/movie-api";
import { AuthContext } from "../contexts/authContext";

const FavoriteMoviesPage = props => {
  const context = useContext(MoviesContext);
  const authContext = useContext(AuthContext);

  // const favorites = context.movies.filter( m => m.favorite );

  const [favorites, setFavourites] = useState([]);
  
  if (authContext.isAuthenticated) {
    var userFavorites = async () => {
      let favMovies = await authContext.userFavourites(authContext.userName);
      // console.log(favMovies);
      return favMovies;
    }
    userFavorites().then(favs => setFavourites(favs))

  return (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};
}

export default FavoriteMoviesPage;