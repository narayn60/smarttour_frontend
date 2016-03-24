import alt from 'alt_base';
import UserTourActions from 'UserTourActions';

class UserTourStore {
  constructor() {
    this.bindActions(UserTourActions);
    this.errorMessage = null;
    this.state = {
      tours: []
    };

    this.exportPublicMethods({
      tourInfo: this.tourInfo
    });
  }

  tourInfo(id) {
    return this.getState().tours[id];
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

export default alt.createStore(UserTourStore, 'UserTourStore');
