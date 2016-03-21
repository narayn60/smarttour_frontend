import alt from 'alt_base';
import MapActions from 'MapActions';

class MapStore {
  constructor() {
    this.bindActions(MapActions);
    this.errorMessage = null;

    this.state ={
      locations: [],
      points: [
        {
          long: -2.602986,
          lat: 51.456018,
          name: 'MVB',
          data: 'The university building'
        },
        {
          long: -2.616101447492838,
          lat: 51.45366594341915,
          name: 'Banksy',
          data: 'A famous Street Artists'
        },
        {
          long: -2.601982,
          lat: 51.456838,
          name: 'Queens',
          data: 'The university engineering building'
        },
      ]
    };

  }

  onUpdateLocations() {
    //TODO: Push the new updated location
    this.setState({ locations: this.state.locations.concat(tour)});
  }

  onFetchLocations() {
    this.state.locations = [];
  }

  onLocationsFailed() {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(MapStore, 'MapStore');
