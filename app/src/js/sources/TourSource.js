import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class TourSource {

  fetch() {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/')
      .then((tours) => {
        return tours.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  fetch_tour(tour_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/')
      .then((tours) => {
        return tours.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
