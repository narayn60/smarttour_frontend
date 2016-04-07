import alt from 'alt_base';
import TourSource from 'TourSource';

class TourActions {
  constructor() {
    this.state = {
      tours: []
    };
    this.stores = {
      TourSource: new TourSource()
    };
    this.generateActions('updateTours', 'updateTour');
  }

  // Fetch all tours
  fetchTours() {
    return (dispatch) => {
      dispatch();
      this.stores.TourSource.fetch()
        .then((tours) => {
          this.updateTours(tours);
        })
        .catch((errorMessage) => {
          this.toursFailed(errorMessage);
        });
    };
  }

  // Fetch an individual tour
  fetchTour(tour_id) {
    return (dispatch) => {
      dispatch();
      this.stores.TourSource.fetch_tour(tour_id)
        .then((tour) => {
          this.updateTour(tour);
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

export default alt.createActions(TourActions);
