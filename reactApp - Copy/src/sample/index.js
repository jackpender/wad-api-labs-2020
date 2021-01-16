// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
// import { Upcoming, PublicPage, Movies, Profile, HomePage} from "./pages";
// import LoginPage from "./loginPage";
// import SignUpPage from "./signUpPage";
// import PrivateRoute from "./privateRoute";
// import AuthHeader from "./authHeader";
// import AuthProvider from "../contexts/authContext";

// import MovieProvider from "../contexts/moviesContext";

// import UpcomingProvider from "./upcomingContext";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <AuthHeader />
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/public">Public</Link>
//           </li>
//           <li>
//             <Link to="/movies">Movies</Link>
//           </li>
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//           <li>
//             <Link to="/upcoming">Upcoming</Link>
//           </li>
//         </ul>
//         <MovieProvider>
//         <Switch>
//           <Route path="/public" component={PublicPage} />
//           <Route path="/login" component={LoginPage} />
//           <Route path="/signup" component={SignUpPage} />,
//           <Route exact path="/" component={HomePage} />
//           <PrivateRoute path="/movies" component={Movies} />
//           <PrivateRoute path="/profile" component={Profile} />
//           <PrivateRoute path="/upcoming" component={Upcoming} /> 
//           <Redirect from="*" to="/" />
//         </Switch>
//         </MovieProvider>
//         {/* <UpcomingProvider>
//           <Switch>
//           <PrivateRoute path="/upcoming" component={Upcoming} /> 
//           </Switch>
//         </UpcomingProvider> */}
//       </AuthProvider>
//     </BrowserRouter>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));
