import alt from 'alt_base';
import UserTourSource from 'UserTourSource';

class UserTourActions {
  constructor() {
    this.state = {
      tours: []
    };
    this.stores = {
      UserTourSource: new UserTourSource()
    };
    this.generateActions('updateTours');
  }

  fetchTours() {
    return (dispatch) => {
      dispatch();
      this.stores.UserTourSource.fetch()
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

export default alt.createActions(UserTourActions);
