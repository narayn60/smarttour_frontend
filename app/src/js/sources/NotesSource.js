import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class NotesSource {

  fetch_notes(location_id) {
    console.log("fetch notes", location_id);
    return axios.get(Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/notes/')
      .then((notes) => {
        console.log(notes.data);
        return notes.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
