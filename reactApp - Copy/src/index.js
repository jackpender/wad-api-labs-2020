// import './sample/';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
// import { PublicPage, Movies, Profile} from "./sample/pages";
import LoginPage from "./sample/loginPage";
import SignUpPage from "./sample/signUpPage";
import PrivateRoute from "./sample/privateRoute";
import AuthHeader from "./sample/authHeader";
import AuthProvider from "./contexts/authContext";

import MovieProvider from "./contexts/moviesContext";

import HomePage from "./pages/homePage";

import Upcoming from "./pages/upcomingMoviesPage";

import SiteHeader from './components/siteHeader'

import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Favorites from "./pages/favoritesMoviesPage";

import Watchlist from "./pages/watchlistMoviesPage";

import TopRated from "./pages/topRatedMoviesPage";

import MoviePage from "./pages/movieDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
    <div class="jumbotron">
        <SiteHeader></SiteHeader>
        <div class="container-fluid">
      <AuthProvider>
        {/* <AuthHeader /> */}
        {/* <ul>
          <li>
            <Link to="/movies">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </ul> */}
        <MovieProvider>
        <AuthProvider>
            <AuthHeader />
        <Switch>
          {/* <Route path="/public" component={PublicPage} /> */}
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />,
          <Route exact path="/movies" component={HomePage} />
          {/* <Route path="/movies" component={Movies} /> */}
          {/* <PrivateRoute path="/profile" component={Profile} /> */}
          <PrivateRoute path="/upcoming" component={Upcoming} /> 
          <PrivateRoute path="/movies/favorites" component={Favorites} />
          <PrivateRoute path="/movies/watchlist" component={Watchlist} />
          <Route path="/movies/top_rated" component={TopRated} />
          <Route path="/movies/:id" component={MoviePage} />
          <Redirect from="*" to="/movies" />
        </Switch>
        </AuthProvider>
        </MovieProvider>
        {/* <UpcomingProvider>
          <Switch>
          <PrivateRoute path="/upcoming" component={Upcoming} /> 
          </Switch>
        </UpcomingProvider> */}
      </AuthProvider>
      </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));