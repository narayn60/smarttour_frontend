import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class LocationSource {

  fetch_locations(tour_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/locations/')
                .then((locations) => locations.data)
                .catch((error) => {
                  throw error;
                });
  }

  update_order(tour_id, new_order) {
    const url = Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/location_order/';
    return axios.patch(url, {order: '[2, 1]'})
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

}
