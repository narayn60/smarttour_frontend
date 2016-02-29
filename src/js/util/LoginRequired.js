import React from "react";
import Router from "react-router";

import AuthStore from "../stores/AuthStore.js";

export default class LoginRequired extends React.Component {

  static willTransitionTo(transition, params, query)  {
    if (!AuthStore.loggedIn()){
      // go over to the login page
      transition.redirect('/login', null, { redirect: transition.path });
    }
  }

  render() {
    <Router.RouteHandler/>
  }
}
