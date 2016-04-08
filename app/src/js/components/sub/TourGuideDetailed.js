import React from "react";
import PersonalTourStore from 'PersonalTourStore';
import PersonalTourActions from 'PersonalTourActions';
import GuideStore from 'GuideStore';
import GuideActions from 'GuideActions';
import connectToStores from 'alt-utils/lib/connectToStores';

import { Row, Col, Image, Button, Collapse, Well, Table } from "react-bootstrap";
import { Router, Route, Link, browserHistory } from 'react-router';
import JsonTable from 'react-json-table';
import Gravatar from 'react-gravatar';



export default class TourGuideDetailed extends React.Component {

  constructor(props) {
    super(props);
    this.state = PersonalTourStore.getState();
    this.guide_id = props.guide_id;
  }

  static getStores() {
    return [PersonalTourStore, GuideStore];
  }

  static getPropsFromStores() {
    return {
      ...PersonalTourStore.getState(),
      ...GuideStore.getState(),
    }
  }

  componentWillMount() {
    PersonalTourStore.listen(this.onChange.bind(this));
    GuideStore.listen(this.onChange.bind(this));
    PersonalTourActions.fetchTours(this.guide_id);
    GuideActions.fetchGuide(this.guide_id);
  }

  componentWillUnmount() {
    PersonalTourStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  __rowClick(tour_id) {
    browserHistory.push('/browse/tours/' + tour_id);
  }
  
  render() {

    console.log("Tours", this.state.tours);

    const guide = this.state.guide;
    const tourComponent = this.state.tours.map((tour, i) => (
      <tr onClick={() => this.__rowClick(tour.id)} key={i}>
        <td>{tour.name}</td>
        <td>{tour.bio}</td>
        <td>{tour.genre}</td>
      </tr>
    ));
    const gravatarSize = 225;

    if (!guide) {
      return (
        <div>
          Guide doesn't exist
        </div>
      );
    }

    return (
      <div>
        <div class="container">
          <h3 class="text-center"> {guide.username} </h3>
          <Row class="square">
            <Col md={8} mdOffset={2} class="user-details">
              <Row class="coralbg white">
                <Col md={6} class="no-pad">
                  <div class="user-pad">
                    <h3>{ guide.username }</h3>
                    <h4 class="white"><i class="fa fa-user"></i> { guide.username } </h4>
                    <h4 class="white"><i class="fa fa-envelope-o"></i> { guide.email } </h4>
                    <h4 class="white"><i class="fa fa-building"></i> { guide.id } </h4>
                  </div>
                </Col>
                <div class="col-md-6 no-pad">
                  <Gravatar email={guide.email} size={gravatarSize} https />
                </div>
              </Row>
              <Row class="overview">
                <Col md={4} class="user-pad text-center">
                  <h3>FOLLOWERS</h3>
                  <h4>{guide.followers}</h4>
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
                  <Table striped bordered condensed hover class="guideTours">
                    <thead>
                      <tr>
                        <th>Tour Name</th>
                        <th>Bio</th>
                        <th>Genre</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tourComponent}
                    </tbody>
                  </Table>
                </div>
              </Collapse>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default connectToStores(TourGuideDetailed);
