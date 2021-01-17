// import React, { useContext } from "react";
// import {MoviesContext} from "../../contexts/moviesContext";

// const AddToWatchlistButton = ({ movie }) => {
//   const context = useContext(MoviesContext);

//   const handleAddToWatchlist = e => {
//     e.preventDefault();
//     context.addToWatchlist(movie.id);
//   };
//   return (
//     <button
//       type="button"
//       className="btn w-100 btn-primary"
//       onClick={handleAddToWatchlist}
//     >
//       Add to Watchlist
//     </button>
//   );
// };

// export default AddToWatchlistButton;

import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

import {AuthContext} from "../../contexts/authContext";

import {watchlist} from "../../api/movie-api";

const AddToWatchlistButton = ({ movie }) => {
  // const context = useContext(MoviesContext);

  // const handleAddToWatchlist = e => {
  //   e.preventDefault();
  //   context.addToWatchlist(movie.id);
  // };
  // return (
  //   <button
  //     type="button"
  //     className="btn w-100 btn-primary"
  //     onClick={handleAddToWatchlist}
  //   >
  //     Add to Watchlist
  //   </button>
  // );
  const context = useContext(MoviesContext);
  const authContext = useContext(AuthContext);

  const handleAddToWatchlist = e => {
    e.preventDefault();
    context.addToWatchlist(movie.id);
    watchlist(authContext.userName, movie.id);
    
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToWatchlist}
    >
      Add to Watchlist
    </button>
  );
};

export default AddToWatchlistButton;