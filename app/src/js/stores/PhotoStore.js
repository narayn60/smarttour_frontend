import alt from 'alt_base';
import PhotoActions from 'PhotoActions';

class PhotoStore {
  constructor() {
    this.bindActions(PhotoActions);
    this.errorMessage = null;

    this.state ={
      photos: []
    };

  }

  onUpdatePhotos(location) {
    //TODO: Push the new updated location
    this.setState({ photos: this.state.photos.concat(location)});
  }

  onFetchPhotos() {
    this.state.photos= [];
  }

  onPhotosFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(PhotoStore, 'PhotoStore');
