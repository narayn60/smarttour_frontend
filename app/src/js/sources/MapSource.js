import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class MapSource {

  fetch(tour_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + "/locations/")
                .then((locations) => locations.data)
                .catch((error) => {
                  throw error;
                });
  }

  /* fetch(tour_id) {
     var mockData = [
     {
     longitude: -2.602986,
     latitude: 51.456018,
     name: 'MVB',
     data: 'The university building'
     },
     {
     longitude: -2.616101447492838,
     latitude: 51.45366594341915,
     name: 'Banksy',
     data: 'A famous Street Artists'
     },
     {
     longitude: -2.601982,
     latitude: 51.456838,
     name: 'Queens',
     data: 'The university engineering building'
     }
     ];
     // returning a Promise because that is what fetch does.
     return new Promise(function (resolve, reject) {
     // simulate an asynchronous action where data is fetched on
     // a remote server somewhere.
     setTimeout(function () {
     // resolve with some mock data
     resolve(mockData);
     }, 250);
     });
     } */
}
