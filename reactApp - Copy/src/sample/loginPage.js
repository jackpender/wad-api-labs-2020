// import React, { useContext } from "react";
// import { Redirect } from "react-router-dom";
// import {AuthContext} from './authContext';
// import {Link } from "react-router-dom";

// const LoginPage = props => {
//   const context = useContext(AuthContext)

//   const login = () => {
//     context.authenticate("user1", "pass1");
//   };
  
//   // Set 'from' to path where browser is redirected after a successful login.
//   // Either / or the protected path user tried to access.
//   const { from } = props.location.state || { from: { pathname: "/" } };

//   if (context.isAuthenticated === true) {
//     return <Redirect to={from} />;
//   }
//   return (
//     <>
//       <h2>Login page</h2>
//       <p>You must log in to view the protected pages </p>
//       {/* Login web form  */}
//       <button onClick={login}>Log in</button>
//       <Link to="/signup">Sign Up!</Link>
//     </>
//   );
// };

// export default LoginPage;

import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";

const LoginPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    context.authenticate(userName, password);
  };

  // Set 'from' to path where browser is redirected after a successful login.
  // Either / or the protected path user tried to access.
  const { from } = props.location.state || { from: { pathname: "/" } } || {from: {pathname: "/upcoming"}};

  if (context.isAuthenticated === true) {
    return <Redirect to={from} />;
  }
  return (
    <>
      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      <input id="username" placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input id="password" type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button className="btn w-10 btn-primary" onClick={login}>Log in</button>
      <p>Not Registered?
      <Link to="/signup">Sign Up!</Link></p>
    </>
  );
};

export default LoginPage;