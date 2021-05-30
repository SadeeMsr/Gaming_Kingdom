import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';
import CheckOut from '../checkoutPage/CheckOut';
import CardDetails from '../checkoutPage/CardDetails';
import Home from '../Home/Home';
import PrivateRoute from './PrivateRoute';

const NavLink = () => {
  return (
    <div>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route exact path='/login'>
        <Login></Login>
      </Route>
      <Route exact path='/signup'>
        <Signup></Signup>
      </Route>
      <Route exact path='/productdetails/:id'>
        <CardDetails></CardDetails>
      </Route>
      <PrivateRoute exact path='/checkout'>
        <CheckOut></CheckOut>
      </PrivateRoute>
    </div>
  );
};

export default NavLink;
