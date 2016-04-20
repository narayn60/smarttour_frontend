import alt from 'alt_base';
import PhotoActions from 'PhotoActions';

class PhotoStore {
  constructor() {
    this.bindActions(PhotoActions);
    this.errorMessage = null;

    this.state ={
      photos: [],
      audio: [],
      videos: []
    };

  }

  onUpdatePhotos(photos) {
    //TODO: Push the new updated location
    this.setState({
      photos: photos
    });
    // this.setState({ photos: this.state.photos.concat(photo)});
  }

  onUpdateAudio(audio) {
    this.setState({
      audio: audio
    });
    // this.setState({
    //   audio: this.state.audio.concat(audio)
    // });
  }

  onUpdateVideo(videos) {
    this.setState({
      videos: videos
    });
    // this.setState({
    //   videos: this.state.videos.concat(video)
    // });
  }

  onFetchPhotos() {
    this.state.photos= [];
  }

  onPhotosFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

}

export default alt.createStore(PhotoStore, 'PhotoStore');
