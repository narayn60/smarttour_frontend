import React from 'react';
import classNames from 'classnames';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Image, Row, Col, Grid, Nav, Button, Badge } from "react-bootstrap";

import AuthStore from 'AuthStore';
import UserTourStore from 'UserTourStore';
import UserTourActions from 'UserTourActions';
import ProfileStore from 'ProfileStore';
import ProfileActions from 'ProfileActions';

import MyFollowers from '../sub/MyFollowers';
import MyFollowing from '../sub/MyFollowing';
import SortableTable from '../sub/SortableTable';
import TourTable from '../sub/TourTable';
import AccountSettings from '../sub/AccountSettings';

export default class ProfileContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      chosenSection: 0
    };
  }

  static getStores() {
    return [UserTourStore, ProfileStore];
  }

  static getPropsFromStores() {
    return {
      ...UserTourStore.getState(),
      ...ProfileStore.getState()
    };
  }

  componentWillMount() {
    UserTourStore.listen(this.onChange.bind(this));
    ProfileStore.listen(this.onChange.bind(this));
    UserTourActions.fetchTours();
    ProfileActions.getProfile();
  }

  componentWillUnmount() {
    UserTourStore.unlisten(this.onChange.bind(this));
    ProfileStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  __onClick(selected) {
    this.setState({chosenSection: selected});
  }

  render() {

    if (!this.state.profile) {
      return (
        <div>
          <i class="fa fa-spin fa-spinner"></i>
          Loading Profile
        </div>
      );
    }

    const profile = this.state.profile[0];
    console.log("Profile", profile);
    const userEmail = profile.email;
    const userName = profile.full_name;
    const tourLength = this.state.tours.length;

    const OptionalComponents = [<TourTable tours={this.state.tours} />, <MyFollowers />, <MyFollowing />, <AccountSettings profile={profile}/>];
    const TourTableComponent = OptionalComponents[this.state.chosenSection];

    const Titles = ["My Tours", "Followers", "Following", "Account Settings"];
    const Title = Titles[this.state.chosenSection];

    const dropdownOptions = [
      {text: 'My Tours', class_name: 'fa fa-map', badge: tourLength},
      {text: 'Followers', class_name: 'fa fa-users', badge: 4},
      {text: 'Following', class_name: 'fa fa-user', badge: 4},
      {text: 'Account Settings', class_name: 'fa fa-cog'}
    ];
    const optionSections = dropdownOptions.map((point, i) => {
      const classes = classNames( {
        'active': (this.state.chosenSection === i)
      });
      return (
        <li class={classes} onClick={() => this.__onClick(i)}>
          <a href="#">
            <i class={point.class_name}></i>
            {point.text}
            <Badge pullRight={true}>{point.badge}</Badge>
          </a>
        </li>
      );
    });

    return (
      <Grid class="bootstrap snippet">
        <Row>
          <Col md={3} id="profileCol">
            <div class="profile-sidebar">
              <div class="profile-userpic">
                <Image class="img-responsive" src={profile.img_url}/>
              </div>
              <div class="profile-usertitle">
                <div class="profile-usertitle-name">
                  {userName}
                </div>
              </div>
              <div class="profile-usermenu">
                <Nav>
                  {optionSections}
                </Nav>
              </div>
            </div>
          </Col>
          <Col md={9} id="contentCol">
            <div class="profile-content">
              <Row>
                <h4>{Title}</h4>
                <hr class="hr-sep"/>
              </Row>
              <Row>
                {TourTableComponent}
              </Row>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connectToStores(ProfileContainer);
