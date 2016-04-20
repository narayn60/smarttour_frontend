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
    const base_url = Global.backend_url + AuthStore.getUid();
    return axios.get(base_url + '/guides/' + guide_id + '/')
      .then((guide) => {
        guide.data.img_url = base_url + "/" + guide.data.photo_path_s3;
        guide.data.cover_url = base_url + "/" + guide.data.cover_photo_path_s3;
        return guide.data;
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
      });
  }

  fetchMyFollowing() {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/my_following/')
      .then((guides) => {
        return guides.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  fetchFollowing(following_ids) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + following_ids + '/followers/')
      .then((guides) => {
        return guides.data;
      })
      .catch((error) => {
        throw error;
      });
  }

  fetchFollowers(follower_ids) {
  return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + follower_ids + '/followers/')
    .then((guides) => {
      return guides.data;
    })
    .catch((error) => {
      throw error;
    });
  }

  follow(guide) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + guide.id + '/follow/')
      .then((guide) => {
        return guide.data[0];
      })
      .catch((error) => {
        throw error;
      });
  }

  unfollow(guide) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + guide.id + '/unfollow/')
      .then((guide) => {
        return guide.data[0];
      })
      .catch((error) => {
        throw error;
      });
  }
}
