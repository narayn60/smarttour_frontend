import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class PhotoSource {

  fetch_photos(location_id) {
    /* var mockData = [
       {
       src: 'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg',
       caption: 'Toronto'
       },
       {
       src: 'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg',
       caption: 'New York'
       },
       {
       src: 'https://www.burgessyachts.com/media/adminforms/locations/n/e/new_york_1.jpg',
       caption: 'Montreal'
       }
       ];
       // returning a Promise because that is what fetch does.
       return new Promise(function (resolve, reject) {
       // simulate an asynchronous action where data is fetched on
       // a remote server somewhere.
       setTimeout(function () {
       // resolve with some mock data
       resolve(mockData);
       }, 250);
       }); */
    return axios.get(Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/photos/')
                .then((photos) => photos.data)
                .catch((error) => {
                  throw error;
                });

  } 

  update_caption(location_id, photo_id, new_caption) {
    const url = Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/photos/' + photo_id + '/';
    return axios.patch(url, {description: new_caption})
      .then((response) => response)
      .catch((error) => {
        throw error;
      });
  }

  delete_photo(location_id, photo_id) {
    const url = Global.backend_url + AuthStore.getUid() + '/locations/' + location_id + '/photos/' + photo_id + '/';
    return axios.delete(url)
      .then((response) => {
        console.log("Succesfully deleted photo");
        return response;
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}
