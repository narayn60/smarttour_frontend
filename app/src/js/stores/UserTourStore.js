import alt from 'alt_base';
import UserTourActions from 'UserTourActions';

class UserTourStore {
  constructor() {
    this.bindActions(UserTourActions);
    this.errorMessage = null;
    this.state = {
      tours: [],
      tour: null
    };

    this.exportPublicMethods({
      tourInfo: this.tourInfo
    });
  }

  tourInfo(id) {
    // return this.getState().tours[id];
    return this.getState().tour;
  }

  onUpdateTours(tour) {
    this.setState({ tours: this.state.tours.concat(tour) });
  }

  onUpdateTour(tour) {
    this.setState({ tour: tour });
  }

  onFetchTours() {
    this.state.tours = [];
  }

  onFetchTour() {
    this.state.tour = null;
  }

  onReloadTours() {
    this.state.tours = [];
  }

  onToursFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(UserTourStore, 'UserTourStore');
