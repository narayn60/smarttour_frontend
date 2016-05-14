import alt from 'alt_base';
import UserTourActions from 'UserTourActions';

class UserTourStore {
  constructor() {
    this.bindActions(UserTourActions);
    this.errorMessage = null;
    this.state = {
      tours: [],
      tour: null,
      location_created: false
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
    this.setState({
      tours: []
    });
  }

  onFetchTour() {
    this.setState({
      tour: null
    });
  }

  onSuccessfulDeleteTour(tour_id) {
    const new_tours = this.state.tours.filter((tour) => tour.id !== tour_id);
    this.setState({tours: new_tours});
  }

  onSuccessfulCreateLocation(tour_id) {
    this.setState({location_created: !this.state.location_created});
  }

  // onReloadTours() {
  //   this.setState({
  //     tours: []
  //   });
  // }

  onToursFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(UserTourStore, 'UserTourStore');
