import React from 'react';
import AuthStore from '../../stores/AuthStore';
import AuthActions from '../../actions/AuthActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import { form, Button, Input } from "react-bootstrap";

export default class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      auth: '',
    };
  }

  componentDidMount() {
    // AuthStore.listen(this._onAuthChange.bind(this));
  }

  _onAuthChange(auth) {
    this.setState(auth);

    if(this.state.loggedIn){
      var redirectUrl = this.getQuery().redirect || '/';
      this.replaceWith(redirectUrl);
    }
  }

  _handleSubmit(event) {
    event.preventDefault();

    // AuthActions.login(
    //   React.findDOMNode(this.refs.email).value,
    //   React.findDOMNode(this.refs.password).value
    // );
  }

  render() {
    var errorMessage;
    if (this.state.error) {
      errorMessage = (
        <div className='state-error' style={{ paddingBottom: 16 }}>
          { this.state.error }
        </div>
      );
    }

    var formContent;
    if (this.state.user) {
      formContent = (
        <div>
          <p>
            You're logged in as <strong>{ this.state.user.name }</strong>.
          </p>
        </div>
      );
    } else {
      formContent = (
        <div>
          { errorMessage }
          Email: <input defaultValue="iwritecode@preact.com" ref="email" style={{ maxWidth: "100%" }} type="email" />
          <br/>
          Password: <input defaultValue="wearehiring!" ref="password" style={{ maxWidth: "100%" }} type="password" />
          <br/>
          <button onClick={ this.handleLogout }>Log In</button>
        </div>
      );
    }
    return (
      <form onSubmit={this._handleSubmit}>
        { formContent }
      </form>
    );
  }
}

//   login(e) {
//     console.log('logging in with user: ' + this.state.user);
//     console.log('with password ' + this.state.password);
//   }

//   changeUsername(e) {
//     this.setState({
//       user: e.target.value
//     });
//   }

//   changePassword(e) {
//     this.setState({
//       password: e.target.value
//     });
//   }

//   render() {
//     return (
//       <div class="container">
//         <div class="row">
//           <div class="col-lg-12 text-center">
//             <h2 class="section-heading">Login</h2>
//             <h3 class="section-subheading text-muted">Head over to Register to create an account</h3>
//           </div>
//         </div>
//         <div class="row">
//           <div class="col-lg-12">
//             <form name="login" id="loginForm" noValidate>
//               <div class="row">
//                 <div class="col-md-8 col-md-offset-2 text-center">
//                   <div class="form-group">
//                     <input type="text" placeholder="Username *" onChange={this.changeUsername.bind(this)}/>
//                   </div>
//                   <div class="form-group">
//                     <input type="text" placeholder="Password *" onChange={this.changePassword.bind(this)}/>
//                   </div>
//                 </div>
//                 <div class="clearfix"></div>
//                 <div class="col-lg-12 text-center">
//                   <div id="success"></div>
//                   <button type="submit" class="btn btn-xl">Login as {this.state.user}</button>
//                 </div>
//               </div>
//             </form>
//             {this.props.children}
//           </div>
//         </div>
//       </div>
//     );
//   } 
// }

// export default connectToStores(LoginContainer);
