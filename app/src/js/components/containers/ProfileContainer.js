import React from 'react';
import Gravatar from 'react-gravatar';
import classNames from 'classnames';
import connectToStores from 'alt-utils/lib/connectToStores';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Row, Col, Grid, Nav, Button, Badge } from "react-bootstrap";

import AuthStore from 'AuthStore';
import TourActions from 'TourActions';
import TourStore from 'TourStore';
import UserTourStore from 'UserTourStore';
import UserTourActions from 'UserTourActions';

import MyFollowers from '../sub/MyFollowers';
import MyFollowing from '../sub/MyFollowing';
import SortableTable from '../sub/SortableTable';
import TourTable from '../sub/TourTable';

export default class ProfileContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      chosenSection: 0
    };
  }

  static getStores() {
    return [UserTourStore];
  }

  static getPropsFromStores() {
    return UserTourStore.getState();
  }

  componentWillMount() {
    UserTourStore.listen(this.onChange.bind(this));
    UserTourActions.fetchTours();
  }

  componentWillUnmount() {
    UserTourStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  __onClick(selected) {
    this.setState({chosenSection: selected});
  }

  render() {

    const userEmail = AuthStore.getEmail();
    const userName = AuthStore.getName().split(" ", 2)[0];
    const gravatarSize = 250;
    const tourLength = this.state.tours.length;

    const OptionalComponents = [<TourTable tours={this.state.tours} />, <MyFollowers />, <MyFollowing />, "TODO: Placeholder"];
    const TourTableComponent = OptionalComponents[this.state.chosenSection];

    const Titles = ["My Tours", "Followers", "Following"];
    const Title = Titles[this.state.chosenSection];

    const dropdownOptions = [
      {text: 'My Tours', class_name: 'fa fa-map', badge: tourLength},
      {text: 'Followers', class_name: 'fa fa-users', badge: 4},
      {text: 'Following', class_name: 'fa fa-user', badge: 4},
      {text: 'Help', class_name: 'glyphicon glyphicon-flag'}
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
        <Row class="profile">
          <Col md={3} id="profileCol">
            <div class="profile-sidebar">
              <div class="profile-userpic">
                <Gravatar email={userEmail} size={gravatarSize} https class="img-responsive"/>
              </div>
              <div class="profile-usertitle">
                <div class="profile-usertitle-name">
                  {userName}
                </div>
              </div>
              <div class="profile-userbuttons">
                <button type="button" class="btn btn-info btn-sm">
                  <i class="fa fa-user-plus"></i>
                  Follow
                </button>
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
