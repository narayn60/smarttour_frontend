import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './pages/routes';
import jquery from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';

render(
      <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
);

// document.getElementById('app')
