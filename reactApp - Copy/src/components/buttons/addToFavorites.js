import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

import {AuthContext} from "../../contexts/authContext";
import { favorites } from "../../api/movie-api";

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);
  const authContext = useContext(AuthContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavorites(movie.id);
    favorites(authContext.userName, movie.id);
    
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;