import axios from 'axios';
import Global from 'Global';
import AuthStore from 'AuthStore';

export default class UserTourSource {

  fetch() {
    const base_url = Global.backend_url + AuthStore.getUid();
    return axios.get(base_url + '/guides/my_tours/')
                .then((tours) => {
                  tours.data.forEach((tour) => {
                    tour.img_url = base_url + "/" + tour.photo_path_s3;
                    tour.cover_url = base_url + "/" + tour.cover_photo_path_s3;
                  });
                  return tours.data;
                })
                .catch((error) => {
                  throw error;
                });

  };

  
  fetch_tour(tour_id) {
    const base_url = Global.backend_url + AuthStore.getUid();
    return axios.get(base_url + '/tours/' + tour_id + '/')
                .then((tour) => {
                  tour.data.img_url = base_url + "/" + tour.data.photo_path_s3;
                  tour.data.cover_url = base_url + "/" + tour.data.cover_photo_path_s3;
                  return tour.data;
                })
                .catch((error) => {
                  throw error;
                });
  }

  update_tour_photo(tour_id, new_photo) {
    const base_url = Global.backend_url + AuthStore.getUid();
    const formData = new FormData();
    formData.append("photo", new_photo);
    return axios.patch(base_url + '/tours/' + tour_id + '/', formData)
                .then((response) => response)
                .catch((error) => {
                  throw error;
                });
  }
}
