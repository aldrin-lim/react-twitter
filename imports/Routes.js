/**
 * @author Aldrin Lim
 * Routing for the App
 */

import React, { Component } from 'react';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import { render } from 'react-dom';
import MainLayout from './layout/MainLayout';
import Home from './views/Home';
import Login from './views/Login';
// Redux Store

const auth = (nextState, replace) => {
  console.log(nextState);
}

const DefaultRoutes = (
  <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path="callback"  onEnter={auth} />
        <Route path="login" component={Login} onEnter={auth} />
      </Route>
  </Router>
);

render((
 DefaultRoutes
), document.getElementById('render-target'));