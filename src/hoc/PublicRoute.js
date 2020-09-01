import React from 'react';
import { Redirect, Route } from 'react-router-dom';

/**
 * Create public route that redirects to 'chat' page if a user is signed in
 * @param {component} component - a component to be wrapped in Public route component
 * @param {boolean} authenticated - indicates whether a user is logged in or not
 */
const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Redirect to='/chat' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
