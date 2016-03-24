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
          console.log(response.data.id)
          // updateTourId(response.data.id);
          return response.data.id
        })
        .catch(function (error) {
          throw error;
        });
    };
  }

  updateTourId(id) {
    return (id);
  }

}

export default alt.createActions(FormActions);
