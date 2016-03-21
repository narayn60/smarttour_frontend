import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class MapSource {

  fetch(tour_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + "/locations/")
      .then((locations) => {
        return locations.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
