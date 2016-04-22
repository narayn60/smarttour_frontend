import { render } from 'react-dom';
import { match, Router, browserHistory } from 'react-router';
import { createHistory } from 'history';
import routes from './pages/routes';
import 'base_css';
import jquery from 'jquery';
import Iso from 'iso';
import alt from 'alt_base';

// Page related
// require('jquery.easing');
// require.context("./design_js/", true, /.*/);

Iso.bootstrap((state) => {
  console.log("bootstrapped state", state);
  alt.bootstrap(state);
});


// render(
//   <Router routes={routes} history={browserHistory}/>,
//   document.getElementById('app')
// );

/* match({createHistory(), routes}, (error, redirectLocation, renderProps) => {
   render(
   <Router {...renderProps} />,
   document.getElementById('app')
   );
   });
 */

console.log("Made it to index.js");
const { pathname, search, hash } = window.location;
const location = `${pathname}${search}${hash}`;

match({ routes, location }, () => {
  render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('app')
  );
});
/* match({ history, routes }, (error, redirectLocation, renderProps) => {
   render(<Router {...renderProps} />, mountNode)
   }) */
