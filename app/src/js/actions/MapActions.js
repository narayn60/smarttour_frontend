import alt from 'alt_base';
import MapSource from 'MapSource';

class MapActions {
  constructor() {
    this.state = {
      locations: []
    };
    this.stores = {
      MapSource: new MapSource()
    };
    this.generateActions('updateLocations');
  }

  fetchLocations(tour_id) {
    return (dispatch) => {
      dispatch();
      this.stores.MapSource.fetch(tour_id)
          .then((locations) => {
            console.log("Locations", locations);
            this.updateLocations(locations);
          })
          .catch((errorMessage) => {
            /* console.log(errorMessage); */
            this.toursFailed(errorMessage);
          });
    };
  }

  locationsFailed(errorMessage) {
    return errorMessage;
  }

}

export default alt.createActions(MapActions);
