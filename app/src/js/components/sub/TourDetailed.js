import React from "react";
import connectToStores from 'alt-utils/lib/connectToStores';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Grid, Row, Col, Image, Button, Collapse, Well, Table } from "react-bootstrap";

import AuthStore from 'AuthStore';
import Global from 'Global';
import LocationActions from 'LocationActions';
import LocationStore from 'LocationStore';
import LocationTable from './LocationTable';
import TourActions from 'TourActions';
import TourStore from 'TourStore';

import ImageLoad from './ImageLoad';
import TourMap from '../../components/gmaps/TourMap';
import ReviewList from './ReviewList';



export default class TourDetailed extends React.Component {

  constructor(props) {
    super(props);
    TourActions.fetchTour(this.props.tour_id);
    LocationActions.fetchLocations(this.props.tour_id);
    this.state = TourStore.getState();
    Object.assign(this.state,
                  LocationStore.getState(),
                  {
                    selected: null,
                    selectedSection: 0
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
    this.setState({
      selected: index
    });
  }

  __onClick(index) {
    this.setState({
      selectedSection: index
    });
  }

  render() {

    const tour = this.state.tour;

    // Case where tour doesn't exist
    if (tour === null) {
      return (
        <div>
          <i class="fa fa-spin fa-spinner"></i>
          Loading Tour
        </div>
      );
    }

    const guide = this.state.tour.guide;
    guide.guide_photo = Global.backend_url + AuthStore.getUid() + "/" + guide.photo_path_s3;
    const qr_path = "/media/tours/" + tour.id + "/qrcode_profile/";

    const tour_info = [
      {class: "trophy", text: "Rank 1"},
      {class: "users", text: tour.followers + " Followers"},
      {class: "map-marker", text: this.state.locations.length + " Points"}
    ].map((info) => (
      <li style={{lineHeight: '40px'}}>
        <i class={"fa fa-2x fa-" + info.class} style={{float: 'left', verticalAlign: 'middle', height: '30px', paddingTop: '8px'}}></i>
        {info.text}
      </li>
    ));

    const location_table = (
      <div class="border_box browse-map">
        <section class="content-item">
          <h4 className="group-title">{this.state.locations.length} Locations</h4>
          <hr/>
          <Row>
            <Col md={5}>
              <LocationTable locations={this.state.locations} onClick={this.__handleClick.bind(this)}/>
            </Col>
            <Col md={7} style={{height: '600px', position: 'relative', overflow: 'hidden'}}>
              <div style={{left: 0, top: 0, width: '100%', height: '100%'}}>
                <TourMap
                  handleClick={this.__handleClick.bind(this)}
                  locations={this.state.locations}
                  selected={this.state.selected}/>
              </div>
            </Col>
          </Row>
        </section>
      </div>
    );

    const sections = [location_table, "Followers", <ReviewList reviews={this.state.tour.reviews}/>];

    return (
      <Grid>
        <Row id="cover_row" style={{backgroundImage: 'url(' + this.state.tour.cover_url + ')'}}>
          <div class="social-cover"></div>
            <Col md={3} id="tourcover_left">
              <h3 class="fg-white text-center">{this.state.tour.name}</h3>
              <img class="img-avatar" src={this.state.tour.img_url} style={{borderRadius: '0px', height: '100px', width: '100px'}}/>
              <h5 class="fg-white text-center" style={{opacity: '0.8'}}>{this.state.tour.bio}</h5>
              <hr class="border-black75" style={{borderWidth: '2px'}}/>
              <ul class="fg-white text-center" style={{opacity: '0.8'}}>
                {tour_info}
              </ul>
            </Col>
            <Col md={3} mdOffset={6} id="tourcover_right">
              <img class="img-avatar" src={guide.guide_photo} style={{height: '100px', width: '100px'}}/>
              <p class="fg-white text-center">Created By</p>
              <h5 class="fg-white text-center">{guide.full_name}</h5>
              <h6 class="fg-white text-center" style={{opacity: '0.8'}}>{guide.email}</h6>
              <hr class="border-black75" style={{borderWidth: '2px'}}/>
              <div class="tour-qr-profile">
                <ImageLoad path= { qr_path }/>
              </div>
            </Col>
        </Row>
        <Row class="border_box">
          <Row>
            <Col md={4} sm={4} xs={4} class="stats-col" onClick={() => this.__onClick(0)} style={{textAlign: 'center'}}>
              <div class="stats-value red">{this.state.locations.length}</div>
              <div class="stats-title">Locations</div>
            </Col>
            <Col md={4} sm={4} xs={4} class="stats-col" onClick={() => this.__onClick(1)} style={{textAlign: 'center'}}>
              <div class="stats-value red">284</div>
              <div class="stats-title">Followers</div>
            </Col>
            <Col md={4} sm={4} xs={4} class="stats-col" onClick={() => this.__onClick(2)} style={{textAlign: 'center'}}>
              <div class="stats-value red">{this.state.tour.reviews.length}</div>
              <div class="stats-title">Reviews</div>
            </Col>
          </Row>
        </Row>
        <Row>
          {sections[this.state.selectedSection]}
        </Row>
      </Grid>
    );
  }
};

export default connectToStores(TourDetailed);
