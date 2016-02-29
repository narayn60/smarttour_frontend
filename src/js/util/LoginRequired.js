import React from "react";
import Router from "react-router";
import connectToStores from 'alt-utils/lib/connectToStores';
import AuthStore from "../stores/AuthStore";

class LoginRequired extends React.Component {

  constructor(nextState, replace) {
    super();
    this.nextState = nextState;
    this.replace = replace;
  }

  static getStores() {
    return [AuthStore];
  }

  static getPropsFromStores() {
    return AuthStore.getState();
  }

  redirect() {
    console.log(this.context.router);
    if (!AuthStore.loggedIn()){
      this.context.router.replace({
        pathname: '/login',
        state: { nextPathname: this.nextState.location.pathname }
      });
    }
  }

}


export default function LoginRedirect(nextState, replace) {
  console.log("Hi");
  lr = React.createFactory(LoginRequired(nextState, replace));
  console.log("Hi");
  lr.redirect();
}

export default connectToStores(LoginRequired);
