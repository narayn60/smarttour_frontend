import React from "react";
import Gravatar from 'react-gravatar';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Grid, Row, Col, Image, Button, Collapse, Well, Table } from "react-bootstrap";

import LocationActions from 'LocationActions';
import LocationStore from 'LocationStore';
import LocationTable from './LocationTable';
import TourActions from 'TourActions';
import TourStore from 'TourStore';

import ImageLoad from './ImageLoad';
import TourMap from '../../components/gmaps/TourMap';


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
  }

  static getStores() {
    return [LocationStore, TourStore];
  }

  static getPropsFromStores() {
    return {
      ...LocationStore.getState(),
      ...TourStore.getState()
    };
  }

  componentWillMount() {
    LocationStore.listen(this.onChange.bind(this));
    TourStore.listen(this.onChange.bind(this));
    this.setState({'rank': 'gold'});
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

    const tour = this.state.tour;

    // Case where tour doesn't exist
    if (tour === null) {
      return (
        <div>
          Tour doesn't exist
        </div>
      );
    }

    const guide = this.state.tour.guide;
    const qr_path = "/media/tours/" + tour.id + "/qrcode_profile/";
    const gravatarSize = 150;

    console.log("Tour", this.state.tour);

    return (
      <Grid>
        <Row id="cover_row" style={{backgroundImage: 'url(https://batlgrounds.com/wp-content/uploads/2015/03/Ottawa.jpg)'}}>
          <div class="social-cover"></div>
            <Col md={3} id="tourcover_left">
              <img class="img-avatar" src={this.state.tour.img_url} style={{borderRadius: '0px', height: '100px', width: '100px'}}/>
              <h4 class="fg-white text-center">{this.state.tour.name}</h4>
              <h5 class="fg-white text-center" style={{opacity: '0.8'}}>{this.state.tour.bio}</h5>
              <hr class="border-black75" style={{borderWidth: '2px'}}/>
              <div class="text-center">
                <i class="fa fa-trophy fa--5x"></i>
                1
              </div>
              {/* <Row class="fa-stack text-center">
              <i class={"fa fa-trophy fa-stack-4x fa-trophy-" + (this.state.rank)}></i>
              <i class="fa fa-inverse fa-stack-4x char-overlay">1</i>
              </Row>
              <Row class="fa-stack text-center">
              <i class="fa fa-heart fa-stack-1x"></i>
              <i class="fa fa-inverse fa-stack-1x char-overlay">{tour.followers}</i>
              </Row> */}
            </Col>
            <Col md={3} mdOffset={6} id="tourcover_right">
              <h4 class="fg-white text-center">Created By</h4>
              <img class="img-avatar" src={this.state.tour.img_url} style={{height: '100px', width: '100px'}}/>
              <h4 class="fg-white text-center">{guide.full_name}</h4>
              <h5 class="fg-white text-center" style={{opacity: '0.8'}}>{guide.email}</h5>
              <hr class="border-black75" style={{borderWidth: '2px'}}/>
              <div class="tour-qr-profile">
                <ImageLoad path= { qr_path }/>
              </div>
            </Col>
        </Row>
        <Row class="browse-map">
          <Col md={12}>
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
      </Grid>
    );
    /* return (
       <div class="container">
       <h2 class="tour-detail-name"> {tour.name} 
       <span class="fa-stack header-icon">
       <i class={"fa fa-trophy fa-stack-1x fa-trophy-" + (this.state.rank)}></i>
       <i class="fa fa-inverse fa-stack-1x char-overlay">1</i>
       </span>
       <span class="fa-stack header-icon">
       <i class="fa fa-heart fa-stack-1x"></i>
       <i class="fa fa-inverse fa-stack-1x char-overlay">{tour.followers}</i>
       </span>
       </h2>
       <Row class="tour-box">
       <Col md={7} class="user-details">
       <Row>
       <Col md={6} class="tour-qr-profile">
       <ImageLoad path= { qr_path }/>
       </Col>
       <Col md={6} class="text-center tour-about">
       <span> { tour.bio } </span>
       </Col>
       </Row>
       </Col>
       <Col md={4} class="user-details">
       <Row>
       <Col md={6}>
       <p class="gray"> by </p>
       <h4> { guide.full_name } </h4>
       <h4> { guide.email } </h4>
       </Col>
       <Col>
       <Gravatar class="user-image" email={guide.email} size={gravatarSize} https />
       </Col>
       </Row>
       </Col>
       </Row>
       </div>
       ); */
  }
}

export default connectToStores(TourDetailed);
