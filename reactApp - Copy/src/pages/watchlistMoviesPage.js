import React, {useContext, useState} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview';
import {MoviesContext} from '../contexts/moviesContext';
import {AuthContext} from "../contexts/authContext";

const WatchlistMoviesPage = props => {
  const context = useContext(MoviesContext);
  const watchlist = context.upcoming.filter( m => m.watchlist )
  return (
    <MovieListPageTemplate
      movies={watchlist}
      title={"Your Watchlist"} 
      action={movie => <AddReviewButton movie={movie} />}
    />
  );

// const WatchlistMoviesPage = props => {
//   const context = useContext(MoviesContext);
//   const authContext = useContext(AuthContext);

//   const [watchlist, setWatchlist] = useState([]);
  
//   if (authContext.isAuthenticated) {
//     var userWatchlist = async () => {
//       let watchlistMovies = await authContext.userWatchList(authContext.userName);
//       return watchlistMovies;
//     }
//     userWatchlist().then(userWatch => setWatchlist(userWatch))

//   return (
//     <MovieListPageTemplate
//       movies={watchlist}
//       title={"Your Watchlist"}
//       action={movie => <AddReviewButton movie={movie} />}
//     />
//   );
// };
// }

// export default WatchlistMoviesPage;

  }

  export default WatchlistMoviesPage;