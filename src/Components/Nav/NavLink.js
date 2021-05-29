import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../Auth/Login';
import Home from '../Home/Home';
// import Login from '../Authentication/Login';
// import Signup from '../Authentication/Signup';

const NavLink = () => {
  return (
    <div>
      <Route exact path="/"><Home></Home></Route>
      <Route exact path="/login"><Login></Login></Route>
      {/* <Route exact path="/login"><Login></Login></Route>
      <Route exact path="/signup"><Signup></Signup></Route> */}
    </div>
  );
}

export default NavLink;
