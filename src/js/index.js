import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './pages/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'leaflet/dist/leaflet.css';
require('./classie');
// require('./agency');
require('./cbpAnimatedHeader');
require('./jqBootstrapValidation');

var main = document.getElementById('app');

Router.run(routes, Router.HistoryLocation, function ran (Handler, state) {
  React.render(<Handler />, main);
});

// render(
//       <Router routes={routes} history={browserHistory}/>,
//     document.getElementById('app')
// );
