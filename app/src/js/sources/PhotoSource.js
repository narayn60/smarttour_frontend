import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class PhotoSource {

  fetch_photos(location_id) {
    const base_url = Global.backend_url + AuthStore.getUid();
    return axios.get(base_url + '/locations/' + location_id + '/files/')
      .then((files) => {
        files.data.map((file) => {
            file.src_url = base_url + "/" + file.file_path_s3;
        });
        return files.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  update_caption(location_id, photo_id, new_caption) {
    const url = Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/files/' + photo_id + '/';
    return axios.patch(url, {description: new_caption})
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  }

  delete_photo(location_id, photo_id) {
    const url = Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/files/' + photo_id + '/';
    return axios.delete(url)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}
