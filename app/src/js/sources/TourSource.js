import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class TourSource {

  constructor() {
      /* this.axios = axios.create({
         baseURL: Global.backend_url + AuthStore.getUid()
         }); */
  }

  fetch() {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/')
      .then((tours) => {
        return tours.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
