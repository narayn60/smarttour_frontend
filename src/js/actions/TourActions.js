import alt from '../alt';
import TourSource from '../sources/TourSource';

class TourActions {
  constructor() {
    this.state = {
      tours: []
    };
    this.stores = {
      TourSource: new TourSource()
    };
    this.generateActions('updateTours');
  }

  fetchTours() {
    return (dispatch) => {
      dispatch();
      var temp = new TourSource();
      this.stores.TourSource.fetch()
        .then((tours) => {
          this.updateTours(tours);
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
