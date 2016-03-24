import React from "react";
import { Row, Col, Image, Button, Collapse, Well, Table } from "react-bootstrap";
import { Router, Route, Link, browserHistory } from 'react-router';

export default class TourDetailed extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    var tour = this.props.tour;
    var dummy_photo = "../../img/team/3.jpg";

    return (
      <div>
        <div class="container">
          <h3 class="text-center"> {tour.name} </h3>
          <Row class="square tour-box">
            <Col md={8} mdOffset={2} class="user-details">
              <Row class="coralbg white">
                <Col md={6} class="no-pad">
                  <div class="user-pad">
                    <h3> Entertainment </h3>
                    <h4 class="white"><i class="fa fa-user"></i> { tour.owner } </h4>
                    <h4 class="white"><i class="fa fa-envelope-o"></i> {tour.id } </h4>
                    <h4 class="white"><i class="fa fa-building"></i> { tour.id } </h4>
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
                  <h4>17</h4>
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
              <span>Bristol is full of interesting outdoor urban art, from Banksy pieces to works by undiscovered artist. Step outdoors and appreciate London's public and street art</span>
            </Col>
          </Row>
          <Row class="text-center">
            <Button bsStyle="success" bsSize="large" class="tourButton" onClick={ ()=> this.setState({ open: !this.state.open })}>
              Download
            </Button>
            <Collapse in={this.state.open}>
              <div>
                <Well class="collapsing-well">
                  <Image src="../../img/portfolio/qr.png" rounded/>
                </Well>
              </div>
            </Collapse>
          </Row>    
        </div>
      </div>
    );
  }
}

          // <Row class="tourTable">
          //   <Col md={8} mdOffset={2} class="text-center"> 
          //     <LeafMap/>
          //   </Col>
          // </Row>
