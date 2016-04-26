import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class ReviewSource {

  create(review) {
    const base_url = Global.backend_url + AuthStore.getUid();
    return axios.post(base_url + '/tours/' + review.tour_id + '/reviews/', review)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}