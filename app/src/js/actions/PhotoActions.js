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
    this.generateActions('successfulDelete', 'updateFiles');
  }

  fetchPhotos(location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.PhotoSource.fetch_photos(location_id)
          .then((files) => {
            this.updateFiles(files);
          })
          .catch((errorMessage) => {
            this.photosFailed(errorMessage);
          });
    };
  }

  updateCaption(location_id, photo_id, description) {
    return (dispatch) => {
      dispatch();
      this.stores.PhotoSource.update_description(location_id, photo_id, description)
          .then((response) => {
            this.successfulUpdateDescription(location_id, photo_id, description);
          })
          .catch((errorMessage) => {
            this.photosFailed(errorMessage);
          });
    };
  }

  deletePhoto(location_id, file_id) {
    return (dispatch) => {
      dispatch();
      this.stores.PhotoSource.delete_photo(location_id, file_id)
        .then((response) => {
          this.successfulDelete(file_id);
        })
        .catch((errorMessage) => {
          this.photosFailed(errorMessage);
        });
    };
  }

  // TODO: Do somehting with error messages
  photosFailed(errorMessage) {
    console.log("Photos Failed", errorMessage);
    return errorMessage;
  }

  successfulUpdateDescription(location_id, file_id, description) {
    return {
      location_id: location_id,
      file_id: file_id,
      description: description
    };
  }

}

export default alt.createActions(PhotoActions);
