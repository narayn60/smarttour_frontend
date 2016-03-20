import axios from 'axios';
import AuthStore from 'AuthStore';

export default class TourSource {

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://tourbackend.jaffnalab.com/auth/' + AuthStore.getUid()
    });
  }

  fetch() {
    return this.axios.get('/tours/')
      .then((tours) => {
        console.log(tours.data);
        return tours.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
