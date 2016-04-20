import React from "react";
import PersonalTourStore from 'PersonalTourStore';
import PersonalTourActions from 'PersonalTourActions';
import GuideStore from 'GuideStore';
import GuideActions from 'GuideActions';
import connectToStores from 'alt-utils/lib/connectToStores';
import Global from 'Global';
import AuthStore from 'AuthStore';
import Follower from './Follower';

import { Grid, Row, Col, Image, Button, Collapse, Well } from "react-bootstrap";
import { Router, Route, Link, browserHistory } from 'react-router';



export default class TourGuideDetailed extends React.Component {

  constructor(props) {
    super(props);
    this.state = PersonalTourStore.getState();
    this.guide_id = props.guide_id;
    this.state = {
      chosenSection: 0
    };
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
    GuideStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  __onClick(selected) {
    this.setState({chosenSection: selected});
  }

  clickFollow() {
    GuideActions.follow(this.state.guide);
  }

  clickUnfollow() {
    GuideActions.unfollow(this.state.guide);
  }

  __rowClick(tour_id) {
    browserHistory.push('/browse/tours/' + tour_id);
  }

  render() {
    const guide = this.state.guide;

    if (!guide) {
      return (
        <div>
          <i class="fa fa-spin fa-spinner"></i>
          Loading Guide
        </div>
      );
    }

    const tourComponent = this.state.tours.map((tour, i) => (
      <div class="member-entry" onClick={() => this.__rowClick(tour.id)}>
        <a href="#" class="member-img">
          <img src={tour.img_url} class="img-rounded"/>
          <i class="fa fa-forward"></i>
        </a>
        <div class="member-details">
          <h4> <a href="#">{tour.name}</a> </h4>
          <div class="row info-list">
            <div>
              {tour.bio}
            </div>
            <div class="clear"></div>
            <Col sm={4}>
              <i class="fa fa-map-marker"></i>
              <a href="#">Location</a>
            </Col>
            <Col sm={4}>
              <i class="fa fa-map-marker"></i>
              <a href="#">Points</a>
            </Col>
            <Col sm={4}>
              <i class="fa fa-linkedin"></i>
              <a href="#">johnkennedy</a>
            </Col>
          </div>
        </div>
      </div>
    ));

    const followers = this.state.followers.map((follower) => (<Follower guide={follower} />));
    const following = this.state.following.map((follower) => (<Follower guide={follower} />));
    const OptionalComponents = [tourComponent, followers, following];

    const GuideTableComponent = OptionalComponents[this.state.chosenSection];

    var followingButton = (
      <a href="#" class="btn btn-palegreen btn-sm  btn-follow" onClick={() => this.clickFollow()}>
        Follow
      </a>
    );

    console.log("Re-render");

    const userEmail = guide.email;
    console.log("Followers length", this.state.followers);
    if (this.state.followers.length > 0) {
      for (let follower of this.state.followers) {
        if (follower !== undefined) {
          if (follower.email === userEmail) {
            followingButton = (
              <a href="#" class="btn btn-palegreen btn-sm  btn-follow" onClick={() => this.clickUnfollow()}>
                <i class="fa fa-check"></i>
                Unfollow
              </a>
            );
          }
        }
      }
    }


    return (
      <Grid class="bootstrap snippet">
        <Row>
          <div class="profile-container">
            <Row class="profile-header">
              <div id="profile-image" style={{backgroundImage: 'url(' + guide.cover_url + ')'}}>
                <div class="social-cover"></div>
                <Row>
                  <Col md={4} sm={12} class="text-center">
                    <img src={guide.img_url} alt="" class="header-avatar"/>
                  </Col>
                  <Col md={8} sm={12} class="profile-info">
                    <div class="header-fullname">{guide.full_name}</div>
                    {followingButton}
                    <div class="header-information">
                      {guide.bio}
                    </div>
                  </Col>
                </Row>
                <Row class="profile-stats">
                  <Col md={4} sm={4} xs={4} class="inlinestats-col">
                    <i class="glyphicon glyphicon-map-marker"></i> Boston
                  </Col>
                  <Col md={4} sm={4} xs={4} class="inlinestats-col">
                    Rate: <strong>$250</strong>
                  </Col>
                  <Col md={4} sm={4} xs={4} class="inlinestats-col">
                    Age: <strong>24</strong>
                  </Col>
                </Row>
              </div>
              <Row class="profile-stats">
                <Col md={4} sm={4} xs={4} class="stats-col" onClick={() => this.__onClick(0)}>
                  <div class="stats-value red">{this.state.tours.length}</div>
                  <div class="stats-title">TOURS</div>
                </Col>
                <Col md={4} sm={4} xs={4} class="stats-col" onClick={() => this.__onClick(1)}>
                  <div class="stats-value red">284</div>
                  <div class="stats-title">FOLLOWING</div>
                </Col>
                <Col md={4} sm={4} xs={4} class="stats-col" onClick={() => this.__onClick(2)}>
                  <div class="stats-value red">803</div>
                  <div class="stats-title">FOLLOWERS</div>
                </Col>
              </Row>
            </Row>
          </div>
        </Row>
        <Row>
          {GuideTableComponent}
        </Row>
      </Grid>
    );
  }
}

export default connectToStores(TourGuideDetailed);
