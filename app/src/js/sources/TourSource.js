import axios from 'axios';

export default class TourSource {
  fetch() {
    var root = 'https://jsonplaceholder.typicode.com';
    return axios(root + '/albums')
      .then((tours) => {
        return tours.data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }
}
