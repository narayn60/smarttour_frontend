import alt from 'alt_base';
import PhotoSource from 'PhotoSource';

class PhotoActions {
  constructor() {
    this.state = {
      photos: []
    };
    this.stores = {
      PhotoSource: new PhotoSource()
    };
    this.generateActions('updatePhotos');
  }

  fetchPhotos(tour_id) {
    return (dispatch) => {
      dispatch();
      this.stores.PhotoSource.fetch_photos(tour_id)
          .then((photos) => {
            console.log("Photos are", photos);
            this.updatePhotos(photos);
          })
          .catch((errorMessage) => {
            this.photosFailed(errorMessage);
          });
    };
  }

  // TODO: Do somehting with error messages
  photosFailed(errorMessage) {
    return errorMessage;
  }

}

export default alt.createActions(PhotoActions);
