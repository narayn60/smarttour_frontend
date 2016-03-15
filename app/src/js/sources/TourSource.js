import axios from 'axios';
import AuthStore from 'AuthStore';

export default class TourSource {
  fetch() {
    var url = 'https://localhost/auth/' + AuthStore.getUid() + '/tours/';
    return axios(url)
      .then((tours) => {
        console.log(tours.data);
        return tours.data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }
}
