// import React, { useState, createContext } from "react";

// export const AuthContext = createContext(null);

// const AuthContextProvider = (props) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const authenticate = (username, password) => {
//     setTimeout(() => {
//       // validate user
//       setIsAuthenticated(true);
//     }, 100);
//   };

//   const register = (username, password) => {
//     setTimeout(() => {
//       // validate user
//       setIsAuthenticated(false);
//     }, 100);
//   };

//   const signout = () => {
//     setTimeout(() => setIsAuthenticated(false), 100);
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         authenticate,
//         register,
//         signout,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;

import React, { useState, createContext } from "react";
import { login, signup, getUserFavourites, getUserWatchlist} from "../api/movie-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  const userFavourites = async (username) => {
    const movies = await getUserFavourites(username);
    //console.log(favorite);
    return (movies);
  }

  const userWatchList = async (username) => {
    const movies = await getUserWatchlist(username);
    //console.log(favorite);
    return (movies);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userFavourites,
        userWatchList,
        userName,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;