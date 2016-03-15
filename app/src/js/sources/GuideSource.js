import axios from 'axios';
import AuthStore from 'AuthStore';

export default class GuideSource {
  fetch() {
    var url = 'https://localhost/auth/' + AuthStore.getUid() + '/guides/';
    return axios(url)
      .then((users) => {
        return users.data;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }
}
