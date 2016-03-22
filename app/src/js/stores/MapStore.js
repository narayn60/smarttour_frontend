import alt from 'alt_base';
import MapActions from 'MapActions';

class MapStore {
  constructor() {
    this.bindActions(MapActions);
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

  onLocationsFailed() {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(MapStore, 'MapStore');
