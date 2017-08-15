/**
 * @author Aldrin Lim
 * Routing for the App
 */

import React, { Component } from 'react';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import { render } from 'react-dom';
import { Session } from 'meteor/session';
import MainLayout from './layout/MainLayout';
import Home from './views/Home';
import Login from './views/Login';
// Redux Store

const auth = (nextState, replace) => {
  if (!Session.get("isLoggedIn")) {
    replace("/login");
  }
}

const callback = (nextState, replace) => {
  Meteor.call("auth",Session.get("requestToken"),Session.get("requestTokenSecret"), nextState.location.query.oauth_verifier, (error, result) => {
    if(!error){
      Session.setPersistent("isLoggedIn", true);
      Session.setPersistent("accessToken", result.accessToken);
      Session.setPersistent("accessTokenSecret", result.accessTokenSecret);
      browserHistory.push("/");
    } else {
      replace("/login");
    }
  });
}

const logout = () => {
  Session.clearPersistent();
  browserHistory.push("/login");
}

const DefaultRoutes = (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout} onEnter={auth}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/login" component={Login} />
    <Route path="/callback" onEnter={callback} />
    <Route path="/logout" onEnter={logout} />
  </Router>
);

render((
  DefaultRoutes
), document.getElementById('render-target'));