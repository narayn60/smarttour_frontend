import alt from 'alt_base';
import axios from 'axios';
import AuthStore from 'AuthStore';

class FormActions {
  constructor() {
    this.state = {};
  }

  createTour(values) {
    return (dispatch) => {
      dispatch();
      console.log(values);
      const url = "https://localhost/auth/" + AuthStore.getUid() + "/tours/";
      axios.post(url, values)
      // axios.post('/user', {})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });
    };
  }
}

export default alt.createActions(FormActions);
