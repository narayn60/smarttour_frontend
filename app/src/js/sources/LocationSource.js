import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class LocationSource {

  fetch_locations(tour_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/get_location_order/')
                .then((locations) => locations.data)
                .catch((error) => {
                  throw error;
                });
  }

  update_order(tour_id, new_order) {
    const url = Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/location_order/';
    return axios.patch(
      url,
      // [{'order[]': 2}, {'order[]': 1}],
      {'order[]': [2, 1]},
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      // { headers: { 'Content-Type': 'application/json' } }
    )
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }

}
