import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class TourSource {

  fetch() {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/')
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

  fetch_tour(tour_id) {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/' + tour_id + '/')
                .then((tour) => {
                  tour.data.img_url = Global.backend_url + AuthStore.getUid() + "/" + tour.data.photo_path_s3;
                  return tour.data;
                })
                .catch((error) => {
                  throw error;
                });
  }
}
