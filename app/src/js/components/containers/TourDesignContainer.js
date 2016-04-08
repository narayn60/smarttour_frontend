import React from 'react';
import UserTourActions from 'UserTourActions';
import UserTourStore from 'UserTourStore';
import connectToStores from 'alt-utils/lib/connectToStores';
import EditLocationOrderContainer from './EditLocationOrderContainer';

import LocationStore from 'LocationStore';
import NotesStore from 'NotesStore';
import PhotoStore from 'PhotoStore';
import LocationActions from 'LocationActions';



export default class TourDesignContainer extends React.Component {

  constructor(props) {
    super(props);
    this.tour_id = this.props.tour_id;
    UserTourActions.fetchTour(this.tour_id);
    LocationActions.fetchLocations(this.tour_id);
    this.state = {
      subselected: 0,
      selected: null,
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
  
  render() {

    console.log(this.state);
    console.log("Should be true", this.state.tour && this.state.locations);

    if (this.state.tour && this.state.locations) {
      console.log("Should update");
      return (
        <div>
          <div class="container">
            <h3> { this.state.tour.name } </h3>
          </div>
          <div>
            <EditLocationOrderContainer
              locations={this.state.locations}
              tour_id={this.props.tour_id}
              photos={this.state.photos}
              bio={this.state.bio}
            />
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
}

export default connectToStores(TourDesignContainer);
