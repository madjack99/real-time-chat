import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Chat from './pages/Chat';

import PrivateRoute from './hoc/PrivateRoute';
import PublicRoute from './hoc/PublicRoute';

import { auth } from './services/firebase';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <PublicRoute path='/login' component={LogIn} authenticated={false} />
        <PrivateRoute path='/chat' component={Chat} authenticated={false} />
      </Switch>
    </Router>
  );
}

export default App;
