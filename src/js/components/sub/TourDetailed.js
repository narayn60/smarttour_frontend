import React from "react";
import { Row, Col, Image, Button, Collapse, Well, Table } from "react-bootstrap";
import { Router, Route, Link, browserHistory } from 'react-router';
import JsonTable from 'react-json-table';

export default class TourGuideDetailed extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    var tour = this.props.tour;
    console.log(tour)
    var dummy_photo = "../../img/portfolio/roundicons.png";
    var fake_points = [

    ];

    return (
        <div>
            <div class="container">
                <Row class="square">
                    <Col md={8} mdOffset={2} class="user-details">
                        <Row class="coralbg white">
                            <Col md={6} class="no-pad">
                                <div class="user-pad">
                                    <h3>{ tour.name }</h3>
                                    <h4 class="white"><i class="fa fa-user"></i> { tour.title } </h4>
                                    <h4 class="white"><i class="fa fa-envelope-o"></i> {tour.id } </h4>
                                    <h4 class="white"><i class="fa fa-building"></i> { tour.userId } </h4>
                                </div>
                            </Col>
                            <div class="col-md-6 no-pad">
                                <Image src={dummy_photo} rounded/>
                            </div>
                        </Row>
                        <Row class="overview">
                            <Col md={4} class="user-pad text-center">
                                <h3>FOLLOWERS</h3>
                                <h4>2,784</h4>
                            </Col>
                            <Col md={4} class="user-pad text-center">
                                <h3>Genre</h3>
                                <h4>Art</h4>
                            </Col>
                            <Col md={4} class="user-pad text-center">
                                <h3>Rank</h3>
                                <h4>3</h4>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row class="tourTable">
                    <Col md={8} mdOffset={2} class="text-center"> 
                        <Button bsStyle="success" bsSize="large" class="tourButton" onClick={ ()=> this.setState({ open: !this.state.open })}>
                          See Locations
                        </Button>
                        <Collapse in={this.state.open}>
                          <div>
                            <Well>
                              <JsonTable rows={ fake_points } />
                            </Well>
                          </div>
                        </Collapse>
                    </Col>
                </Row>
            </div>
        </div>
    );
  }
}