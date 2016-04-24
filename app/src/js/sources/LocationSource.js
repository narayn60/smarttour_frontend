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

  update_order(tour_id, order) {
    const url = Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/location_order/';
    return axios.patch(url, {order: JSON.stringify(order)})
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  }

  update_values(values, tour_id, location_id) {
    const url = Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/locations/' + location_id + '/';
    return axios.patch(url, values)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  }


  delete_location(tour_id, location_id) {
    const url = Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/locations/' + location_id + '/';
    return axios.delete(url)
      .then((response) => response)
      .catch((error) => {
        throw error; 
      });
  }

}
