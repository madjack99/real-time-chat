import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LogIn from './pages/LogIn';
import Home from './pages/Home';

import { auth } from './services/firebase';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
