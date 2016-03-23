import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class PersonalTourSource {

  constructor() {
  }

  fetch(guide_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + guide_id + '/tours/')
      .then((tours) => {
        return tours.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
