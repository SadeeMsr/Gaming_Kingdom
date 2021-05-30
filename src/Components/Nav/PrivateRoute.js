import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
  const Auth = sessionStorage.getItem('isLoggedin');
  return (
    <Route
      {...rest}
      render={({ location }) =>
        Auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
