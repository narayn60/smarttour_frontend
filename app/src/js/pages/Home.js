// modules/Home.js
import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router';


export default class Home extends React.Component {
  render() {
    return (

      <div>
        <div class="backgroundImageContainer">
          <div class="background-image header_1"></div>
          <header>
            <div class="content container">
              <div class="intro-text">
                <Row>
                  <img class="intro-lead-in" src="/img/logos/logo.png"/>
                  <h3> Rediscover your world </h3>
                </Row>
                <Row>
                  <Link class="intro-photo" to="/browse">
                    <Button class="btn btn-xl">Sign Up</Button>
                  </Link>
                </Row>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

{/* <div class="intro-lead-in">Jaffna Tours</div> */}
