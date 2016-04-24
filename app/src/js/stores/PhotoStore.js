import alt from 'alt_base';
import PhotoActions from 'PhotoActions';

class PhotoStore {
  constructor() {
    this.bindActions(PhotoActions);
    this.errorMessage = null;

    this.state ={
      photos: [],
      audio: [],
      videos: [],
      files: []
    };

  }

  onUpdateFiles(files) {
    const photos = files.filter((value) => value.descriptor === 'Picture');
    const audio = files.filter((value) => value.descriptor === 'Audio');
    const videos = files.filter((value) => value.descriptor === 'Video');
    this.setState({
      files: files,
      photos: photos,
      audio: audio,
      videos: videos
    });
  }

  onFetchPhotos() {
    this.state.photos= [];
  }

  onPhotosFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  onSuccessfulDelete(file_id) {
    const new_files = this.state.files.filter((file) => file.id !== file_id);
    this.onUpdateFiles(new_files);
  }

  // onSuccessfulUpdateCaption(input) {
  // }

  onSuccessfulUpdateDescription(input) {
    const location_id = input.location_id;
    const file_id = input.file_id;
    const description = input.description;

    const new_files = this.state.files;
    for (var i=0; i < new_files.length; i++) {
      if (new_files[i].id === file_id) {
        new_files[i].description = description;
      }
    }
    this.onUpdateFiles(new_files);
  }


}

export default alt.createStore(PhotoStore, 'PhotoStore');
