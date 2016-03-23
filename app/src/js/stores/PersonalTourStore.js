import alt from 'alt_base';
import PersonalTourActions from 'PersonalTourActions';

class PersonalTourStore {
  constructor() {
    this.bindActions(PersonalTourActions);
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

export default alt.createStore(PersonalTourStore, 'PersonalTourStore');
