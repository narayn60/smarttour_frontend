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
            this.locationsFailed(errorMessage);
          });
    };
  }

  updateOrder(tour_id, new_order) {
    return (dispatch) => {
      dispatch();
      this.stores.LocationSource.update_order(tour_id, new_order)
        .then((reponse) => {
          this.fetchLocations(tour_id);
        })
        .catch((errorMessage) => {
          this.locationsFailed(errorMessage);
        });
    };
  }

  deleteLocation(tour_id, location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.LocationSource.delete_location(tour_id, location_id)
        .then((response) => {
          this.fetchLocations(tour_id);
        })
        .catch((errorMessage) => {
          this.locationsFailed(errorMessage);
        });
    };
  }

  locationsFailed(errorMessage) {
    return errorMessage;
  }

}

export default alt.createActions(LocationActions);
