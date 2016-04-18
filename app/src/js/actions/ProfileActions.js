import alt from 'alt_base';
import ProfileSource from 'ProfileSource';

class ProfileActions {

  constructor() {
    this.source = {
      ProfileSource: new ProfileSource()
    };
    this.generateActions('updateProfile');
  }

  getProfile() {
    return (dispatch) => {
      dispatch();
      this.source.ProfileSource.get_profile()
          .then((profile) => {
            this.updateProfile(profile);
          })
          .catch((errorMessage) => {
            console.log('ProfileAction error: ', errorMessage);
            this.profileFailed(errorMessage);
          });
    };
  }

  profileFailed(errorMessage) {
    return errorMessage;
  }
}
export default alt.createActions(ProfileActions);
