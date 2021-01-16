import React, { useState, createContext, useEffect, useReducer } from "react";
import { getUpcoming } from "../api/movie-api";

export const UpcomingContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { upcoming: action.payload.result};
    default:
      return state;
  }
};

const UpcomingContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { upcoming: []});
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    getUpcoming().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  return (
    <UpcomingContext.Provider
      value={{
        upcoming: state.upcoming,
        setAuthenticated
      }}
    >
      {props.children}
    </UpcomingContext.Provider>
  );
};

export default UpcomingContextProvider