import alt from 'alt_base';
import LocationSource from 'LocationSource';

class LocationActions {
  constructor() {
    this.state = {
      locations: []
    };
    this.stores = {
      LocationSource: new LocationSource()
    };
    this.generateActions('updateLocations');
  }

  fetchLocations(tour_id) {
    return (dispatch) => {
      dispatch();
      this.stores.LocationSource.fetch_locations(tour_id)
          .then((locations) => {
            this.updateLocations(locations);
          })
          .catch((errorMessage) => {
            /* console.log(errorMessage); */
            this.locationsFailed(errorMessage);
          });
    };
  }

  locationsFailed(errorMessage) {
    return errorMessage;
  }

}

export default alt.createActions(LocationActions);
