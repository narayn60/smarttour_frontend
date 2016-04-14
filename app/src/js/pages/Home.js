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
                  <h3>Discover the world</h3>
                </Row>
                <Row class="home-button">
                  <Link class="intro-photo" to="/login">
                    <Button class="btn btn-xl">Sign Up</Button>
                  </Link>
                </Row>
              </div>
            </div>
          </header>
        </div>
        <div class="backgroundImageContainer">
          <div class="background-image header_2"></div>
          <header>
            <div class="content container">
              <div class="right-text">
                <Row>
                  <h3>
                    Experience touring as it was meant to be.
                  </h3>
                </Row>
                <Row class="home-button">
                  <Link class="intro-photo" to="/about">
                    <Button class="btn btn-xl">Find out more</Button>
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

