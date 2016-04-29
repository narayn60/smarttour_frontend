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
    this.generateActions('updateLocations', 'successfulDelete');
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

  updateValues(new_values, tour_id, location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.LocationSource.update_values(new_values, tour_id, location_id)
        .then((response) => {
          this.successfulUpdate(new_values, location_id);
        })
        .catch((errorMessage) => {
          this.locationsFailed(errorMessage);
        });
    };
  }

  successfulUpdate(new_values, location_id) {
    return {
      values: new_values,
      id: location_id
    };
  }

  deleteLocation(tour_id, location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.LocationSource.delete_location(tour_id, location_id)
        .then((response) => {
          this.successfulDelete(location_id);
          // this.fetchLocations(tour_id);
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
