import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';
import CheckoutPage from '../checkoutPage/CheckoutPage';
import Home from '../Home/Home';

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
      <Route exact path='/checkout'>
        <CheckoutPage></CheckoutPage>
      </Route>
    </div>
  );
};

export default NavLink;
