import alt from 'alt_base';
import axios from 'axios';
import AuthStore from 'AuthStore';
import Global from 'Global';

class FormActions {
  constructor() {
    this.state = {};
  }

  createTour(values) {
    return (dispatch) => {
      dispatch();
      console.log(values);
      const url = Global.backend_url + AuthStore.getUid() + "/tours/";
      axios.post(url, values)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          throw error;
        });
    };
  }
}

export default alt.createActions(FormActions);
