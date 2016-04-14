import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class GuideSource {

  fetch() {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/')
      .then((users) => {
        return users.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  fetch_guide(guide_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + guide_id + '/')
      .then((users) => {
        return users.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  fetchMyFollowers() {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/my_followers/')
      .then((guides) => {
        return guides.data;
      })
      .catch((error) => {
        throw error;
      })
  }

  fetchMyFollowing() {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/my_following/')
      .then((guides) => {
        return guides.data;
      })
      .catch((error) => {
        throw error;
      })
  }
}
