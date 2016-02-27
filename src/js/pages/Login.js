import React from "react";
import { connect } from 'react-redux';
import { Field } from 'react-redux-form';
import { form, Button, Input } from "react-bootstrap";

export default class Login extends React.Component {

  	constructor() {
  		super();
  		this.state = {
  			user: '',
  			password: '',
  		};
  	}

	login(e) {
    	console.log('logging in with user: ' + this.state.user)
		console.log('with password ' + this.state.password)
  	}

  	changeUsername(e) {
  		this.setState({
  			user: e.target.value
  		});
  	}

  	changePassword(e) {
  		this.setState({
  			password: e.target.value
  		});
  	}

	render() {
		console.log(this.props);
		return (
        <section id="contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading">Login</h2>
                        <h3 class="section-subheading text-muted">Head over to Register to create an account</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                    <form name="login" id="loginForm" noValidate>
                          <div class="row">
                              <div class="col-md-8 col-md-offset-2 text-center">
                                  <div class="form-group">
                                    <input type="text" placeholder="Username *" onChange={this.changeUsername.bind(this)}/>
                                  </div>
                                  <div class="form-group">
                                    <input type="text" placeholder="Password *" onChange={this.changePassword.bind(this)}/>
                                  </div>
                              </div>
                              <div class="clearfix"></div>
                              <div class="col-lg-12 text-center">
                                  <div id="success"></div>
                                  <button type="submit" class="btn btn-xl">Login as {this.state.user}</button>
                              </div>
                          </div>
                      </form>
                     {this.props.children}
              </div>
            </div>
        </div>
      </section>
    );
	} 
}



