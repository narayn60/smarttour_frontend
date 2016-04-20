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
    this.generateActions('updatePhotos', 'updateAudio', 'updateVideo');
  }

  fetchPhotos(location_id) {
    return (dispatch) => {
      dispatch();
      this.stores.PhotoSource.fetch_photos(location_id)
          .then((files) => {
            const photos = files.filter((value) => value.descriptor === 'Picture');
            const audio = files.filter((value) => value.descriptor === 'Audio');
            const videos = files.filter((value) => value.descriptor === 'Video');
            this.updatePhotos(photos);
            this.updateAudio(audio);
            this.updateVideo(videos);
          })
          .catch((errorMessage) => {
            this.photosFailed(errorMessage);
          });
    };
  }

  updateCaption(location_id, photo_id, caption) {
    return (dispatch) => {
      dispatch();
      this.stores.PhotoSource.update_caption(location_id, photo_id, caption)
          .then((response) => {
            this.fetchPhotos(location_id); //TODO: Change this to stop stuttering, need to update to keep consistent state
          })
          .catch((errorMessage) => {
            this.photosFailed(errorMessage);
          });
    };
  }

  deletePhoto(location_id, photo_id) {
    return (dispatch) => {
      dispatch();
      this.stores.PhotoSource.delete_photo(location_id, photo_id)
        .then((response) => {
          this.fetchPhotos(location_id);
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

}

export default alt.createActions(PhotoActions);
