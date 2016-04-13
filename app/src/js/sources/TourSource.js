import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class TourSource {

  fetch() {
    return axios.get(Global.backend_url + AuthStore.getUid() + '/tours/')
                .then((tours) => {
                  tours.data.forEach((tour) =>
                    tour.img_url = tour.photo ? Global.backend_url + AuthStore.getUid() + "/" + tour.photo_path_s3 : ' /img/portfolio/roundicons.png'
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
                  tour.data.img_url = tour.data.photo ? Global.backend_url + AuthStore.getUid() + "/" + tour.data.photo_path_s3 : ' /img/portfolio/roundicons.png';
                  return tour.data;
                })
                .catch((error) => {
                  throw error;
                });
  }
}
