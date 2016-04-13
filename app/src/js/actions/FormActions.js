import alt from 'alt_base';
import axios from 'axios';
import AuthStore from 'AuthStore';
import Global from 'Global';
import FormSource from 'FormSource';


class FormActions {
  constructor() {
      this.state = {
      tour_id: []
    };
    this.stores = {
      FormSource: new FormSource()
    };
  }

  createTour(values) {
    console.log(values);
    return (dispatch) => {
      dispatch();
      this.stores.FormSource.save(values)
        .then((id) => {
          this.updateId(id);
        })
        .catch((errorMessage) => {
          console.log('error: ' + errorMessage);
        });
    };
  }

  updateId(id) {
    return id;
  }

  formFailed(errorMessage) {
    return errorMessage;
  }
}

export default alt.createActions(FormActions);
