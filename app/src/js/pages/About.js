// modules/About.js
import React from 'react';
import { Link } from "react-router";
import Service from '../components/sub/Service';
import { Row } from 'react-bootstrap';

export default class About extends React.Component {
  
  render() {

    const Services = [
      <Service key={1} name={"Interactive Tours"} bio={"Digital tours!"}/>,
      <Service key={2} name={"Tour Guides"} bio={"Free and easy to design!"}/>,
      <Service key={3} name={"Go on tours, for free"}  bio={"Discover the hidden Canadian wonders on offer in Bristol"}/>,
      <Service key={4} name={"Register Free"}bio={"Get an account now!"}/>,
    ];

    return (
      <div class="backgroundImageContainer">
        <div class="background-image about_image"></div>
        <header>
          <div class="content container">
            <Row class="text-center">
              {Services}
            </Row>
          </div>
        </header>
      </div>
    );
  }
}
