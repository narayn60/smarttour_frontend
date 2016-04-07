import React from "react";
import ImageLoad from './ImageLoad';
import TourMap from '../../components/gmaps/TourMap';
import LocationTable from './LocationTable';

import LocationActions from 'LocationActions';
import LocationStore from 'LocationStore';

import TourStore from 'TourStore';
import TourActions from 'TourActions';

import connectToStores from 'alt-utils/lib/connectToStores';

import { Row, Col, Image, Button, Collapse, Well, Table } from "react-bootstrap";
import { Router, Route, Link, browserHistory } from 'react-router';


export default class TourDetailed extends React.Component {

  constructor(props) {
    super(props);
    TourActions.fetchTour(this.props.tour_id);
    LocationActions.fetchLocations(this.props.tour_id);
    this.state = TourStore.getState();
    Object.assign(this.state,
                  LocationStore.getState(),
                  {
                    selected: null
                  }
    );
    /* this.state = TourStore.getState();
       this.state = LocationStore.getState();
       this.state.selected = null; */
  }

  static getStores() {
    return [LocationStore, TourStore];
  }

  static getPropsFromStores() {
    /* return LocationStore.getState(); */
    return {
      ...LocationStore.getState(),
      ...TourStore.getState()
    }
  }

  componentWillMount() {
    LocationStore.listen(this.onChange.bind(this));
    TourStore.listen(this.onChange.bind(this));
    console.log(this.props);
  }

  componentWillUnmount() {
    LocationStore.unlisten(this.onChange.bind(this));
    TourStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }


  __handleClick(index) {
    this.setState({selected: index});
    console.log(index);
  }



  render() {

    // Case where tour doesn't exist
    if (this.state.tour === null) {
      return (
        <div>
          Tour doesn't exist
        </div>
      );
    }
    console.log("State", this.state);
    var tour = this.state.tour;
    var guide = this.state.tour.guide;
    var dummy_photo = "../../img/team/3.jpg";
    var qr_path = "/media/tours/" + tour.id + "/qrcode_profile/";

    return (
      <div>
        <div class="container">
          <h2 class="tour-detail-name"> {tour.name} </h2>
          <Row class="square tour-box">
            <Col md={7} class="user-details">
              <Row class="overview">
                <Col md={4} class="user-pad text-center">
                  <h3> Followers </h3>
                  <h4> { tour.followers } </h4>
                </Col>
                <Col md={4} class="user-pad text-center">
                  <h3> Locations </h3>
                  <h4> { tour.points }</h4>
                </Col>
                <Col md={4} class="user-pad text-center">
                  <h3> Rank </h3>
                  <h4> 3 </h4>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <h3> Download </h3>
                  <ImageLoad path= { qr_path }/>
                </Col>
                <Col md={6} class="text-center tour-about">
                  <h3> About </h3>
                  <span> { tour.bio } </span>
                </Col>
              </Row>
            </Col>
            <Col md={4} class="user-details guide-details">
              <Row class="coralbg white creator-info">
                <h3> Creator </h3>
                <h4 class="white"> { guide.full_name } </h4>
                <h4 class="white"> { guide.email } </h4>
              </Row>
              <Row class="user-triangle">
              </Row>
              <Row>
                <Image src= { dummy_photo } rounded class="user-image"/>
              </Row>
            </Col>
          </Row>
        </div>
        <Row class="browse-map">
          <h2 class="tour-detail-name"> Experience The Tour </h2>
          <Col md={10} mdOffset={1}>
            <Col md={5}>
              <LocationTable locations={this.state.locations} onClick={this.__handleClick.bind(this)}/>
            </Col>
            <Col md={7} style={{height: '600px', position: 'relative', overflow: 'hidden'}}>
              <div style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}>
                <TourMap
                  handleClick={this.__handleClick.bind(this)}
                  locations={this.state.locations}
                  selected={this.state.selected}/>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connectToStores(TourDetailed);
