import alt from 'alt_base';
import UserTourSource from 'UserTourSource';

class UserTourActions {
  constructor() {
    this.state = {
      tours: []
    };
    this.stores = {
      UserTourSource: new UserTourSource()
    };
    this.generateActions('updateTours', 'updateTour');
  }

  fetchTours() {
    return (dispatch) => {
      dispatch();
      this.stores.UserTourSource.fetch()
        .then((tours) => {
          this.updateTours(tours);
        })
        .catch((errorMessage) => {
          this.toursFailed(errorMessage);
        });
    };
  }

  fetchTour(tour_id) {
    return (dispatch) => {
      dispatch();
      this.stores.UserTourSource.fetch_tour(tour_id)
        .then((tour) => {
          this.updateTour(tour);
        })
        .catch((errorMessage) => {
          this.toursFailed(errorMessage);
        });
    };
  }

  updateTourPhoto(tour_id, photo_form) {
    return (dispatch) => {
      dispatch();
      this.stores.UserTourSource.update_photo(tour_id, photo_form)
        .then((tour) => {
          this.fetchTour(tour_id);
        })
        .catch((errorMessage) => {
          this.toursFailed(errorMessage);
        });
    };
  }

  toursFailed(errorMessage) {
    return errorMessage;
  }

}

export default alt.createActions(UserTourActions);
