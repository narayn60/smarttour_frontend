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

  update_about(values, tour_id, location_id) {
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

  delete_notes(notes, location_id) {
    const url = Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/notes/note_id/';
    const delete_requests = notes.map((note) => {
      return axios.delete(url.replace('note_id', note));
    });
    return axios.all(delete_requests)
      .then(axios.spread((response) => response))
      .catch((error) => {
        throw error;
      });
  }
}
