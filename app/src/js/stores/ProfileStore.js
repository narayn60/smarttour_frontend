import alt from 'alt_base';
import ProfileActions from 'ProfileActions';

class ProfileStore {

  constructor() {
    this.bindActions(ProfileActions);
    this.errorMessage = null;

    this.state = {
      profile: null
    };
  }

  onGetProfile() {
    this.setState({
      profile: null
    });
  }

  onUpdateProfile(profile) {
    this.setState({
      profile: profile
    });
  }
}

export default alt.createStore(ProfileStore, 'ProfileStore');
