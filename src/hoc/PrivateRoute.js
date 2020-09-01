import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/**
 * Create a private route that only registered users have access to.
 * @param {component} component - a component to be wrapped in Private route component
 * @param {boolean} authenticated - indicates whether a user is logged in or not
 */
const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
