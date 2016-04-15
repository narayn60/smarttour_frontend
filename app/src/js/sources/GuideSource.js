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

  fetchFollowing(following_ids) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + following_ids + '/followers/')
      .then((guides) => {
        return guides.data;
      })
      .catch((error) => {
        throw error;
      })
  }

  fetchFollowers(follower_ids) {
  return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + follower_ids + '/followers/')
    .then((guides) => {
      return guides.data;
    })
    .catch((error) => {
      throw error;
    })
  }

  follow(guide) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + guide.id + '/follow/')
      .then((guide) => {
        console.log(guide.data[0])
        return guide.data[0]
      })
      .catch((error) => {
        throw error;
      })
  }

  unfollow(guide) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + guide.id + '/unfollow/')
      .then((guide) => {
        return guide.data[0]
      })
      .catch((error) => {
        throw error;
      })
  }
}
