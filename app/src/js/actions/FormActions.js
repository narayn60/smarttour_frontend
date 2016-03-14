import alt from 'alt_base';
import axios from 'axios';

class FormActions {
  constructor() {
    this.state = {};
  }

  createTour(values) {
    return (dispatch) => {
      dispatch();
      console.log(values);
      axios.post('/user', {})
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
