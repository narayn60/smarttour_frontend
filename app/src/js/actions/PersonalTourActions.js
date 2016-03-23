import alt from 'alt_base';
import PersonalTourSource from 'PersonalTourSource';

class PersonalTourActions {
  constructor() {
    this.state = {
      tours: []
    };
    this.stores = {
      PersonalTourSource: new PersonalTourSource()
    };
    this.generateActions('updateTours');
  }

  fetchTours(guide_id) {
    return (dispatch) => {
      dispatch();
      this.stores.PersonalTourSource.fetch(guide_id)
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

export default alt.createActions(PersonalTourActions);
