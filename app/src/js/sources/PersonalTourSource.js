import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class PersonalTourSource {

  fetch(guide_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/guides/' + guide_id + '/guide_tours/')
      .then((tours) => {
        tours.data.forEach((tour) =>
                           tour.img_url = Global.backend_url + AuthStore.getUid() + "/" + tour.photo_path_s3
                          );
        return tours.data;
      })
      .catch((error) => {
        throw error;
      });
  }
}
