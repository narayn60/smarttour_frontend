// modules/Home.js
import React from 'react';
import { Button } from 'react-bootstrap';
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
                <div class="intro-lead-in">Jaffna Tours</div>
                <Link to="/browse">
                  <Button class="page-scroll btn btn-xl">Take a tour</Button>
                </Link>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
