import React from 'react';
import { Row, Col, Image, Button, Collapse, Well, ListGroup, ListGroupItem } from "react-bootstrap";
import TourStore from 'TourStore';
import TourActions from 'TourActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Router, Route, Link, browserHistory } from 'react-router';
import AuthStore from 'AuthStore';
import Gravatar from 'react-gravatar';
import TourTable from '../components/sub/TourTable';

export default class Profile extends React.Component {

  constructor() {
    super();
    // this.filterColumns = ['Name'
    // ];
    this.user = {
      followers: 340,
      created_tours: 4
    };
  }

  render() {

    const userEmail = AuthStore.getEmail();
    const userName = AuthStore.getName().split(" ", 2)[0];
    const gravatarSize = 200;

    var profileStyle = {
      marginTop: '20px',
      marginBottom: '20px'
    };

    return (
      <div class="container" style={profileStyle}>
        <Row class="panel">
          <Col xs={4} class="bg_blur"></Col>
          <Col xs={12} md={8}>
            <Gravatar email={userEmail} size={gravatarSize} https class="img-thumbnail picture hidden-xs"/>
            <Gravatar email={userEmail} size={gravatarSize} https class="img-thumbnail visible-xs picture_mob"/>
            <div class="header_profile">
              <h1>Welcome, { userName }</h1>
              <h4></h4>
              <span>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</span>
            </div>
          </Col>
        </Row>   

        <Row class="nav">    
          <Col md={4}></Col>
          <Col xs={12} md={8}>
            <Col xs={4} md={4} class="well"><i class="fa fa-user fa-lg"></i> {this.user.followers} Followers </Col>
            <Col xs={4} md={4} class="well"><i class="fa fa-map fa-lg"></i> My Tours</Col>
            <Col xs={4} md={4} class="well"><i class="fa fa-thumbs-o-up fa-lg"></i> 16</Col>
          </Col>
        </Row>

        <Row>
          <TourTable />

        </Row>
      </div>
    );

  }
}
