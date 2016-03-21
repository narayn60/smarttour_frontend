import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class GuideSource {

  constructor() {
    // this.axios = axios.create({
    //   baseURL: Global.backend_url + AuthStore.getUid()
    // });
  }


  fetch() {
    // return this.axios.get('/guides/')
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/')
      .then((users) => {
        return users.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
