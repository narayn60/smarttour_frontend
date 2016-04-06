// modules/About.js
import React from 'react';
import { Link } from "react-router";
import Service from '../components/sub/Service';
import { Row, Col } from 'react-bootstrap';

export default class About extends React.Component {
  
  render() {

    const path = [
                "https://static-unitag.com/images/help/QRCode/qrcode.png?mh=07b7c2a2",
                "http://icons.iconarchive.com/icons/igh0zt/ios7-style-metro-ui/512/MetroUI-Apps-Mac-App-Store-icon.png",
                "http://tecnimedios.com/blog/wp-content/uploads/2013/10/amazon-aws.png",
                "https://d30y9cdsu7xlg0.cloudfront.net/png/17698-200.png"
              ]

    const Services = [
      <Service key={1} step={1} path={path[0]} name={"- Download a tour -"} bio={"Browse our tours, find one that interests you and scan the QR code to download it. Easy as 1, 2, 3."} image_path={path}/>,
      <Service key={2} step={2} path={path[1]} name={"- iOS App -"} bio={"Open the tour in our iOS App!"} image_path={path}/>,
      <Service key={3} step={3} path={path[2]} name={"- Go on a tour -"}  bio={"Download customised data at each location"} image_path={path}/>,
      <Service key={4} step={4} path={path[3]} name={"- Review -"}bio={"Review the tour!"} image_path={path}/>,
    ];

    return (
      <div class="backgroundImageContainer">
        <div class="background-image about_image"></div>
        <header>
          <div class="content container">
            <ul class="about-ul">
              {Services}
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
