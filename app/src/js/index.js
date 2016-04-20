import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './pages/routes';
import 'base_css';
import jquery from 'jquery';
import Iso from 'iso';
import alt from 'alt_base';

// Page related
// require('jquery.easing');
// require.context("./design_js/", true, /.*/);

Iso.bootstrap((state) => {
  alt.bootstrap(state);
});


render(
      <Router routes={routes} history={browserHistory}/>,
    document.getElementById('app')
);
