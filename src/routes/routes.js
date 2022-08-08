import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

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
