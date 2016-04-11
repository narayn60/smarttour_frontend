import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class UserTourSource {

  fetch() {

    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/my_tours/')
                .then((tours) => {
                  //TODO: Make sure backend sends actual image, change this to photo
                  tours.data.forEach((tour) =>
                    tour.img_url = "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shop_Until_You_Drop_by_Banksy.JPG"
                  );
                  console.log("Tours", tours);
                  return tours.data;
                })
                .catch((error) => {
                  throw error;
                });

  };

  
  fetch_tour(tour_id) {

    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/')
                .then((tour) => tour.data)
                .catch((error) => {
                  throw error;
                });
  }
}
