import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";

import AuthHeader from "../../sample/authHeader";

import AuthProvider from "../../contexts/authContext";

import { withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

// const SiteHeader = () => {
//   return (
//     <nav className="navbar  navbar-light fixed-top  bg-dark ">
//       <nav className="navbar-brand text-white">
//         <Link className=" text-white" to="/">
//           TMDB Client
//         </Link>
//       </nav>
//       <FontAwesomeIcon
//         className="navbar-text text-light"
//         icon={["fas", "video"]}
//         size="3x"
//       />
//       <span className="navbar-text text-light">
//         For the movie enthusiast !!
//       </span>
//       <FontAwesomeIcon
//         className="navbar-text text-light"
//         icon={["fas", "film"]}
//         size="3x"
//       />
//       <nav className="navbar navbar-expand ">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/upcoming">
//               Upcoming
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/favorites">
//               Favorites
//             </Link>
//           </li>
//           <li classname="nav-item">
//             <Link className="nav-link text-white" to="/movies/watchlist">
//               Watchlist
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" to="/movies/top_rated">
//               Top Rated
//             </Link>
//           </li>
//           <AuthProvider>
//             {/* <AuthHeader /> */}
//           {/* <AuthHeader className="nav-item" /> */}
//             <Link className="nav-link text-white" to="/login">
//               <AuthHeader />
//               {" "}
//             </Link>
//           </AuthProvider>
//         </ul>
//       </nav>
//     </nav>
//   );
// };

const SiteHeader = (props) => {

  const context = useContext(AuthContext);
  const { history } = props;

  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li classname="nav-item">
            <Link className="nav-link text-white" to="/movies/watchlist">
              Watchlist
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/top_rated">
              Top Rated
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default withRouter(SiteHeader);