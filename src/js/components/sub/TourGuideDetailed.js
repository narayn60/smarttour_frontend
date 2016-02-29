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
                <Row class="square">
                    <Col md={8} mdOffset={2} class="user-details">
                        <Row class="coralbg white">
                            <Col md={6} class="no-pad">
                                <div class="user-pad">
                                    <h3>{ guide.name }</h3>
                                    <h4 class="white"><i class="fa fa-check-circle-o"></i> { guide.address.city }</h4>
                                    <h4 class="redHue"><i class="fa fa-twutter"></i>{ guide.username }</h4>
                                    <Button class="subscribeButton btn-labeled btn-info" href="#">
                                        <span class="btn-label"><i class="fa fa-plus"></i></span>
                                        Subscribe
                                    </Button>
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
                <Row class="tourTable">
                    <Col md={8} mdOffset={2} class="text-center"> 
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