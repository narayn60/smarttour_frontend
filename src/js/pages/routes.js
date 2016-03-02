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
import TourMap from './TourMap';
import CreateTour from './CreateTour';
import DetailedTour from './DetailedTour';
import DetailedGuide from './DetailedGuide';
import AuthStore from 'AuthStore';
import Profile from './Profile';

function LoginRedirect(nextState, replace) {
  if (!AuthStore.getState().authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
  }
}

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/register" component={Register}/>
    <Route path="/login" component={Login}/>

    <Route onEnter={LoginRedirect}>
        <Route path="/browse" component={Browse}/>
        <Route path="/browse/tours/:id" component={DetailedTour}/>
        <Route path='/guides' component={Guides}/>
        <Route path="/guides/:id" component={DetailedGuide}/>
        <Route path='/tourcreator' component={TourMap}/>
        <Route path='/createtour' component={CreateTour}/>
        <Route path='/profile' component={Profile}/>
    </Route>
  </Route>
);


