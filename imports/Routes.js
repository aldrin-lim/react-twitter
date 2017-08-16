/**
 * @author Aldrin Lim
 * Routing for the App
 */

import React, { Component } from 'react';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Session } from 'meteor/session';
import { createStore } from 'redux';
import MainLayout from './layout/MainLayout';
import Home from './views/Home';
import Login from './views/Login';
import Callback from './components/Callback';
import Reducer from './reducer';
// Redux Store
const store = createStore(Reducer);

const auth = (nextState, replace) => {
  if (!Session.get("isLoggedIn")) {
    replace("/login");
  }
}


const logout = () => {
  Session.clearPersistent();
  browserHistory.push("/login");
}


const DefaultRoutes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout} onEnter={auth}>
        <IndexRoute component={Home} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/callback" component={Callback} />
      <Route path="/logout" onEnter={logout} />
    </Router>
  </Provider>
);

render((
  DefaultRoutes
), document.getElementById('render-target'));