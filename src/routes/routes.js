import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../containers/Home";
import Register from "../containers/Register";
import Login from "../containers/Login";
import PrivateRoute from "./../commons/PrivateRoute";

const Routers = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default Routers;
