import alt from 'alt_base';
import TourActions from 'TourActions';

class TourStore {
  constructor() {
    this.bindActions(TourActions);
    this.errorMessage = null;
    this.state = {
      tours: []
    };
  }

  onUpdateTours(tour) {
    this.setState({ tours: this.state.tours.concat(tour) });
  }

  onFetchTours() {
    this.state.tours = [];
  }

  onReloadTours() {
    this.state.tours = [];
  }

  onToursFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(TourStore, 'TourStore');
