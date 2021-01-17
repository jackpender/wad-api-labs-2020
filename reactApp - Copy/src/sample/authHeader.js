import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <nav>
      Welcome {context.userName}! <button onClick={() => context.signout()}>Sign out</button>
    </nav>
  ) : (
    <nav>
      You are not logged in{" "}
      <button className="btn w-10 btn-primary" onClick={() => history.push("/login")}>Login</button>
    </nav>
  );
};

export default withRouter(BaseAuthHeader);
