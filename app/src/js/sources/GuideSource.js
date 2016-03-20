import axios from 'axios';
import AuthStore from 'AuthStore';

export default class GuideSource {

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://tourbackend.jaffnalab.com/auth/' + AuthStore.getUid()
    });
  }


  fetch() {
    return this.axios.get('/guides/')
      .then((users) => {
        console.log("users", users);
        return users.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
