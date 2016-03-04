// modules/Home.js
import React from 'react';
import { Button } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (

      <div>
        <div class="backgroundImageContainer">
          <div class="background-image header_1"></div>
          <header>
            <div class="content container">
              <div class="intro-text">
                <div class="intro-lead-in">Jaffna Tours</div>
                <Button class="page-scroll btn btn-xl">Take a tour</Button>
              </div>
            </div>
          </header>
        </div>
        <div class="backgroundImageContainer">
          <div class="background-image header_2"></div>
          <header>
            <div class="content container">
              <div class="right-text">
                <div class="intro-lead-in">
                  Bringing the best tours available to you
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
