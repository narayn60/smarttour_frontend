import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import About from './About';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Browse from './Browse';
import Tour from './Tour';
import Guides from './Guides';
import CreateTour from './CreateTour';
import DetailedTour from './DetailedTour';
import DetailedGuide from './DetailedGuide';
import AuthStore from 'AuthStore';
import Profile from './Profile';
import TourDesign from './TourDesign';
import axios from 'axios';

function LoginRedirect(nextState, replace) {
  if (process.env.BROWSER) {
    if (!AuthStore.isLoggedIn()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }
}

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>

    <Route onEnter={LoginRedirect}>
      <Route path='/profile' component={Profile}/>
      <Route path="/browse" component={Browse}/>
      <Route path="/browse/tours/:id" component={DetailedTour}/>
      <Route path='/guides' component={Guides}/>
      <Route path="/guides/:id" component={DetailedGuide}/>
      <Route path='/createtour' component={CreateTour}/>
      <Route path='/mytours/:id' component={TourDesign}/>
    </Route>
  </Route>
);




