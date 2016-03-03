import React from 'react';
import AuthStore from 'AuthStore';
import AuthActions from 'AuthActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import { form, Button, Input } from "react-bootstrap";

export default class LoginContainer extends React.Component {
  constructor() {
    super();
  }

  _handleSubmit(event) {
    event.preventDefault();
  }
  // AuthActions.login(
  //   React.findDOMNode(this.refs.email).value,
  //   React.findDOMNode(this.refs.password).value
  // );
  

  render() {
    return (
      <div>
        <a class="btn btn-large btn-info" href="/auth/google">Login with Google</a>
      </div>
    )
  }
}

// export default connectToStores(LoginContainer);

