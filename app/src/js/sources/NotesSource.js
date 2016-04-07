import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class NotesSource {

  fetch_notes(tour_id, location_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/locations/' + location_id + '/')
      .then((notes) => {
        return notes.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  update_bio(values, tour_id, location_id) {
    const url = Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/locations/' + location_id + '/';
    return axios.patch(url, values)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }
}
