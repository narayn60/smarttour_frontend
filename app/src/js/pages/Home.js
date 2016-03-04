// modules/Home.js
import React from 'react';
import { Button } from 'react-bootstrap';

export default class Home extends React.Component {
  render() {
    return (
      <div class="background-content">
        <header class="header_1">
          <div class="container">
            <div class="intro-text">
              <div class="intro-lead-in">Jaffna Tours</div>
              <Button class="page-scroll btn btn-xl">Take a tour</Button>
            </div>
          </div>
        </header>
        <header class="header_2">
          <div class="container">
            <div class="right-text">
              <div class="intro-lead-in">
                Bringing the best tours available to you
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
