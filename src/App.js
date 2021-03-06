import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Chat from './pages/Chat';

import PrivateRoute from './hoc/PrivateRoute';
import PublicRoute from './hoc/PublicRoute';

import { auth } from './services/firebase';

import './app.style.css';

/**
 * App handles routes and subscribes to firebase to track authentication
 * state changes of users
 */
function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) setAuthenticated(true);
      else setAuthenticated(false);
    });
  });

  return (
    <Router>
      <Header authenticated={authenticated} />
      <Switch>
        <Route exact path='/' component={Home} />
        <PublicRoute
          path='/login'
          component={LogIn}
          authenticated={authenticated}
        />
        <PrivateRoute
          path='/chat'
          component={Chat}
          authenticated={authenticated}
        />
      </Switch>
    </Router>
  );
}

export default App;
