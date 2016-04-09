import React from 'react';
import UserTourActions from 'UserTourActions';
import UserTourStore from 'UserTourStore';
import connectToStores from 'alt-utils/lib/connectToStores';
import EditLocationOrderContainer from './EditLocationOrderContainer';
import PersonalTourOverviewContainer from './PersonalTourOverviewContainer';

import LocationActions from 'LocationActions';
import LocationStore from 'LocationStore';
import NotesStore from 'NotesStore';
import PhotoStore from 'PhotoStore';

import { Row, Col, Image, Button, Collapse, Well, Table } from "react-bootstrap";



export default class TourDesignContainer extends React.Component {

  constructor(props) {
    super(props);
    this.tour_id = this.props.tour_id;
    UserTourActions.fetchTour(this.tour_id);
    LocationActions.fetchLocations(this.tour_id);
    this.state = {
      overview: true,
      photos: [],
      bio: null
    };
  }

  static getStores() {
    return [NotesStore, LocationStore, PhotoStore, UserTourStore];
  }

  static getPropsFromStores() {
    return {
        ...UserTourStore.getState(),
        ...LocationStore.getState(),
        ...NotesStore.getState(),
        ...PhotoStore.getState()
    };
  }

  componentWillMount() {
    UserTourStore.listen(this.onChange.bind(this));
    LocationStore.listen(this.onChange.bind(this));
    NotesStore.listen(this.onChange.bind(this));
    PhotoStore.listen(this.onChange.bind(this));
  }


  componentWillUnmount() {
    UserTourStore.unlisten(this.onChange.bind(this));
    LocationStore.unlisten(this.onChange.bind(this));
    NotesStore.unlisten(this.onChange.bind(this));
    PhotoStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  __onClick() {
    this.setState({
      overview: !this.state.overview
    });
  }

  render() {

    var chosen_section,
        button_text;

    if (this.state.overview) {
      chosen_section = (
              <PersonalTourOverviewContainer
                locations={this.state.locations}
              />
              );
      button_text = "Edit Tour";
    } else {
      chosen_section = (
            <EditLocationOrderContainer
              locations={this.state.locations}
              tour_id={this.props.tour_id}
              photos={this.state.photos}
              bio={this.state.bio}
              notes={this.state.notes}
            />
      );
      button_text = "Tour Overview";
    }

    if (this.state.tour && this.state.locations) {
      return (
        <div>
          <div class="container">
            <h3> { this.state.tour.name } </h3>
              <Button onClick={this.__onClick.bind(this)}>{button_text}</Button>
          </div>
          <div>
            {chosen_section}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Hi
        </div>
      );
    }

  }
};

export default connectToStores(TourDesignContainer);
