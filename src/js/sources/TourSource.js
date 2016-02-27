import axios from 'axios';

export default class TourSource {
  fetch() {
    var root = 'http://jsonplaceholder.typicode.com';
    return axios(root + '/posts')
      .then((tours) => {
        return tours.data.map((tour) => tour.title);
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }
}
