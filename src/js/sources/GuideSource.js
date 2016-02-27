import axios from 'axios';

var dummy_photo = "img/team/3.jpg";
var mockData = [
  {name: 'George Nash', bio: 'Tours for dog owners', photo: dummy_photo},
  {name: 'Andy Stuart', bio: 'Discover the hidden Canadian wonders on offer in Bristol', photo: dummy_photo},
  {name: 'Ioan Troana', bio: 'Specialises in Guiness pub tours', photo: dummy_photo},
  {name: 'Andra Irimia', bio: 'Love treasure hunts? Me too!', photo: dummy_photo}
];

export default class GuideSource {
  fetch () {
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
