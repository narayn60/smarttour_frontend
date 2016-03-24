import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class UserTourSource {

  fetch() {

    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/my_tours/')
      .then((tours) => {
        //TODO: Make sure backend sends actual image
        tours.data.forEach((tour) =>
                           tour.img_url = "https://upload.wikimedia.org/wikipedia/commons/7/7f/Shop_Until_You_Drop_by_Banksy.JPG"
                          );
        return tours.data;
      })
      .catch((error) => {
        throw error;
      });

  };
}
