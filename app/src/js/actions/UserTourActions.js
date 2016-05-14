import alt from 'alt_base';
import UserTourSource from 'UserTourSource';

class UserTourActions {
  constructor() {
    this.state = {
      tours: []
    };
    this.sources = {
      UserTourSource: new UserTourSource()
    };
    this.generateActions('updateTours', 'updateTour', 'successfulDeleteTour', 'successfulCreateLocation');
  }

  fetchTours() {
    return (dispatch) => {
      dispatch();
      this.sources.UserTourSource.fetch()
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
      this.sources.UserTourSource.fetch_tour(tour_id)
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
      this.sources.UserTourSource.update_photo(tour_id, photo_form)
        .then((tour) => {
          this.fetchTour(tour_id);
        })
        .catch((errorMessage) => {
          this.toursFailed(errorMessage);
        });
    };
  }

  deleteTour(tour_id) {
    return (dispatch) => {
      dispatch();
      this.sources.UserTourSource.delete_tour(tour_id)
        .then((response) => {
          this.successfulDeleteTour(tour_id);
        })
        .catch((errorMessage) => {
          this.toursFailed(errorMessage);
        });
    };
  }

  createLocation(tour_id) {
    return (dispatch) => {
      dispatch();
      this.sources.UserTourSource.create_location(tour_id)
        .then((response) => {
          this.successfulCreateLocation(tour_id);
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
