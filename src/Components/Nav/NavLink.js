import React from "react";
import { Route } from "react-router-dom";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import CardDetail from "../Card-detail/CardDetail";
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
      <Route exact path="/signup">
        <Signup></Signup>
      </Route>
      <Route exact path="/card-details">
        <CardDetail></CardDetail>
      </Route>
    </div>
  );
};

export default NavLink;
