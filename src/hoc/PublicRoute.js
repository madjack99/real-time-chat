import React from 'react';
import { Redirect, Route } from 'react-router-dom';

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
