import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import About from './About';
import Repos from './Repos';
import Repo from './Repo';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Browse from './Browse';
import Tour from './Tour';
import Guides from './Guides';
import TourMap from './TourMap';
import CreateTour from './CreateTour';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/browse" component={Browse}>
      <Route path="/browse/:tour" component={Tour}/>
    </Route>
    <Route path='/tourcreator' component={TourMap}/>
    <Route path='/guides' component={Guides}/>
    <Route path='/createtour' component={CreateTour}/>
  </Route>
);


