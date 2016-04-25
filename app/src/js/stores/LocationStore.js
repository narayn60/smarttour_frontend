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

  onSuccessfulDelete(location_id) {
    const new_locations = this.state.locations.filter((location) => location.id !== location_id);
    this.setState({
      locations: new_locations
    });
  }

  onSuccessfulUpdate(input) {
    const location_id = input.id;
    const values = input.values;

    const new_locations = this.state.locations;
    csoneol.log("SuccessfulUpdate");
    for (var i=0; i < new_locations.length; i++) {
      if (new_locations[i].id === location_id) {
        Object.assign(new_locations[i], values);
      }
    }
    this.setState({
      locations: new_locations
    });
  }


}

export default alt.createStore(LocationStore, 'LocationStore');
