import React from "react";
import LoginContainer from '../components/containers/LoginContainer';
import { Row } from 'react-bootstrap';

export default class Login extends React.Component {

  render() {
    return (
      <div class="backgroundImageContainer">
        <div class="background-image login_image"></div>
        <header>
          <div class="content container">
            <Row class="text-center">
              <LoginContainer />
            </Row>
          </div>
        </header>
      </div>
    );
  } 
}

/* <section id="contact">
   <div class="container">
   </div>
   </section> */
