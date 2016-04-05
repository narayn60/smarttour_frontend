import React from "react";
import { Row, Col, Image, Button, Collapse, Well, Table } from "react-bootstrap";
import { Router, Route, Link, browserHistory } from 'react-router';
import ImageLoad from './ImageLoad';

export default class TourDetailed extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    var tour = this.props.tour;
    var guide = this.props.tour.guide;
    var dummy_photo = "../../img/team/3.jpg";
    var qr_path = "/media/tours/" + tour.id + "/qrcode_profile/"

    return (
      <div>
        <div class="container">
          <Row class="square tour-box">
            <Col md={8} mdOffset={2} class="user-details">
              <Row class="coralbg white">
                <Col md={6} class="no-pad">
                  <div class="user-pad">
                    <h3> { tour.title } </h3>
                    <h4 class="white"><i class="fa fa-user"></i> { guide.full_name } </h4>
                    <h4 class="white"><i class="fa fa-envelope-o"></i> {guide.email } </h4>
                    <h4 class="white"><i class="fa fa-building"></i> { guide.username } </h4>
                  </div>
                </Col>
                <div class="col-md-6 no-pad">
                  <Image src={dummy_photo} rounded/>
                </div>
              </Row>
              <Row class="overview">
                <Col md={4} class="user-pad text-center">
                  <h3>Followers</h3>
                  <h4>{tour.followers}</h4>
                </Col>
                <Col md={4} class="user-pad text-center">
                  <h3>Locations</h3>
                  <h4>{tour.points}</h4>
                </Col>
                <Col md={4} class="user-pad text-center">
                  <h3>Rank</h3>
                  <h4>3</h4>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row class="overview">
            <Col md={8} mdOffset={2} class="text-center tour-about">
              <h3> About </h3>
              <span>{tour.bio}</span>
            </Col>
          </Row>
          <Row class="text-center">
            <Button bsStyle="success" bsSize="large" class="tourButton" onClick={ ()=> this.setState({ open: !this.state.open })}>
              Download
            </Button>
            <Collapse in={this.state.open}>
              <div>
                <Well class="collapsing-well">
                  <ImageLoad path={qr_path} />
                </Well>
              </div>
            </Collapse>
          </Row>    
        </div>
      </div>
    );
  }
}
