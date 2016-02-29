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
}

export default connectToStores(LoginRequired);
