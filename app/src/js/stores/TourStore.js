import alt from 'alt_base';
import TourActions from 'TourActions';

class TourStore {
  constructor() {
    this.bindActions(TourActions);
    this.errorMessage = null;
    this.state = {
      tours: [],
      tour: null
    };
  }

  onUpdateTours(tour) {
    this.setState({
      tours: this.state.tours.concat(tour)
    });
  }

  onUpdateTour(tour) {
    this.setState({
      tour: tour
    });
  }

  onFetchTours() {
    this.setState({
      tours: []
    });
  }

  onFetchTour() {
    this.setState({
      tour: null
    });
  }

  onReloadTours() {
    this.setState({
      tours: []
    });
  }

  onToursFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(TourStore, 'TourStore');
