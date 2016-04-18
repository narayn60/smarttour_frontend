import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class ProfileSource {

  get_profile() {
    const base_url = Global.backend_url + AuthStore.getUid();
    return axios.get(base_url + '/guides/me/')
	    .then((profile) => {
        profile.data[0].img_url = base_url + "/" + profile.data[0].photo_path_s3;
        return profile.data;
	    })
	    .catch((error) => {
	      throw error;
	    });
  }
}
