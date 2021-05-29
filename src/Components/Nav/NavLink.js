import React from "react";
import { Route } from "react-router-dom";
import Login from "../Auth/Login";
import Home from "../Home/Home";

const NavLink = () => {
  return (
    <div>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/login">
        <Login></Login>
      </Route>
    </div>
  );
};

export default NavLink;
