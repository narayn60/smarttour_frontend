import React from "react";

export default class Register extends React.Component {

  	constructor() {
  		super();
  		this.state = {
  			user: '',
  			password: '',
  		};
  	}

	  register(e) {
    	console.log('register with user: ' + this.state.user);
		  console.log('with password ' + this.state.password);
  	}

    changeUsername(e) {
      this.setState({
        user: e.target.value
      });
    }

    changePassword(e) {
      console.log(this.state)
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
                        <h2 class="section-heading">Register</h2>
                        <h3 class="section-subheading text-muted">Already have an account? Head over to login.</h3>
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
                                  <button type="submit" class="btn btn-xl">Creating the account {this.state.user}</button>
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



