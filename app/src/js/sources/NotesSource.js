import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class NotesSource {

  fetch_notes(location_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/')
      .then((notes) => {
        return notes.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  update_bio(values, location_id) {
    const url = Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/';
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
