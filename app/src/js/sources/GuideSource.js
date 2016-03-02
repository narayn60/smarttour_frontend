import axios from 'axios';

export default class GuideSource {
  fetch() {
    var root = 'http://jsonplaceholder.typicode.com';
    return axios(root + '/users')
      .then((users) => {
        return users.data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }
}
