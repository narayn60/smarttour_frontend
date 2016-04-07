import alt from 'alt_base';
import LocationActions from 'LocationActions';

class LocationStore {
  constructor() {
    this.bindActions(LocationActions);
    this.errorMessage = null;

    this.state ={
      locations: []
    };

  }

  onUpdateLocations(location) {
    //TODO: Push the new updated location
    this.setState({ locations: this.state.locations.concat(location)});
  }

  onFetchLocations() {
    this.state.locations = [];
  }

  onLocationsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }


}

export default alt.createStore(LocationStore, 'LocationStore');
