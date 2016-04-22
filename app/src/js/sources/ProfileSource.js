import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class ProfileSource {

  get_profile() {
    const base_url = Global.backend_url + AuthStore.getUid();
    return axios.get(base_url + '/guides/me/')
	    .then((profile) => {
        console.log("Profile is ", profile);
        profile.data[0].img_url = base_url + "/" + profile.data[0].photo_path_s3;
        profile.data[0].cover_url = base_url + "/" + profile.data[0].cover_photo_path_s3;
        return profile.data[0];
	    })
	    .catch((error) => {
        console.log("Get profile error is", error);
	      throw error;
	    });
  }

  update_photo(guide_id, photo_form) {
    const base_url = Global.backend_url + AuthStore.getUid();
    return axios.patch(base_url + '/guides/' + guide_id + '/', photo_form)
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  }
}
