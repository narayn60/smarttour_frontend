import React from "react";
import { Row, Col, Image, Button, Collapse, Well, Table } from "react-bootstrap";
import { Router, Route, Link, browserHistory } from 'react-router';
import LeafMap from '../leaflet/LeafMap';

export default class TourGuideDetailed extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  render() {
    var guide = this.props.guide;
    var dummy_photo = "../img/team/3.jpg";
    var fake_tours = [
    {
        name: 'Banksy Art Trail',
        genre: 'Art',
        followers: 500,
        rating: 4.5,
        city: 'Bristol',
        created: '24/06/2016'
    },
    {
        name: 'Food Challenges',
        genre: 'Food',
        followers: 650,
        rating: 3.7,
        city: 'Bristol',
        created: '18/05/2016'
    },
    {
        name: 'Treasure Hunt',
        genre: 'Entertainment',
        followers: 226,
        rating: 4.1,
        city: 'Bristol',
        created: '02/04/2016'
    },
    ];

    return (
        <div>
            <div class="container">
                <h3 class="text-center"> {tour.title} </h3>
                <Row class="square tour-box">
                    <Col md={8} mdOffset={2} class="user-details">
                        <Row class="coralbg white">
                            <Col md={6} class="no-pad">
                                <div class="user-pad">
                                    <h3>{ guide.name }</h3>
                                    <h4 class="white"><i class="fa fa-user"></i> { guide.username } </h4>
                                    <h4 class="white"><i class="fa fa-envelope-o"></i> {guide.email } </h4>
                                    <h4 class="white"><i class="fa fa-building"></i> { guide.address.city } </h4>
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
                                <h3>Tours Created</h3>
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
                        <span>I am a bio. Look at me. I am describing the tour. 
                        Ooooh a bio. I am a bio. Look at me. I am describing the tour. 
                        Ooooh a bio. I am a bio. Look at me. I am describing the tour. 
                        Ooooh a bio.</span>
                    </Col>
                </Row>
                <Row class="text-center">
                    <Button bsStyle="success" bsSize="large" class="tourButton" onClick={ ()=> this.setState({ open: !this.state.open })}>
                              Download
                    </Button>
                    <Collapse in={this.state.open}>
                      <div>
                        <Well>
                            <Image src="../../img/portfolio/qr.png" rounded/>
                        </Well>
                      </div>
                    </Collapse>
                </Row>    
                <Row class="tourTable">
                    <Col md={8} mdOffset={2} class="text-center"> 
                        <LeafMap/>
                        <Button bsStyle="success" bsSize="large" class="tourButton" onClick={ ()=> this.setState({ open: !this.state.open })}>
                          See Tours
                        </Button>
                        <Collapse in={this.state.open}>
                          <div>
                            <Well>
                              <JsonTable rows={ fake_tours } />
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
