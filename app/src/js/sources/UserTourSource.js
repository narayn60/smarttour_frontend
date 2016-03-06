import axios from 'axios';

export default class UserTourSource {
  fetch() {
    const tours = [{
      "name": 'Banksy',
      "id": 1,
      "subscribers": 450,
      "img_url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shop_Until_You_Drop_by_Banksy.JPG"
    }, {
      "name": 'Pubs',
      "id": 2,
      "subscribers": 3200,
      "img_url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shop_Until_You_Drop_by_Banksy.JPG"
    }, {
      "name": 'History',
      "id": 3,
      "subscribers": 21,
      "img_url": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shop_Until_You_Drop_by_Banksy.JPG"
    }];

    // TODO: Change this to real request
    return new Promise(function (resolve, reject) {
      // simulate an asynchronous action where data is fetched on
      // a remote server somewhere.
      setTimeout(function () {
        // resolve with some mock data
        resolve(tours);
      }, 250);
    });

    //   var root = 'https://jsonplaceholder.typicode.com';
    // return axios(root + '/albums')
    //   .then((tours) => {
    //     return tours.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     return null;
    //   });
  };
}
