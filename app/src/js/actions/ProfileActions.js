import alt from 'alt_base';
import ProfileSource from 'ProfileSource';

class ProfileActions {

  constructor() {
    this.source = {
      ProfileSource: new ProfileSource()
    };
    this.generateActions('updateProfile');
  }

  // updateProfile(profile) {
  //   console.log("Should update profile");
  //   return profile;
  // }

  getProfile() {
    return this.source.ProfileSource.get_profile()
      .then((profile) => {
        console.log("Updated profile", profile);
        this.updateProfile(profile);
        // console.log("UpdateProfile", this.updateProfile(profile));
      })
      .catch((errorMessage) => {
        console.log('ProfileAction error: ', errorMessage);
        this.profileFailed(errorMessage);
      });
    // return (dispatch) => {
    //   dispatch();
    //   this.source.ProfileSource.get_profile()
    //       .then((profile) => {
    //         console.log("Updated profile");
    //         this.updateProfile(profile);
    //       })
    //       .catch((errorMessage) => {
    //         console.log('ProfileAction error: ', errorMessage);
    //         this.profileFailed(errorMessage);
    //       });
    // };
  }

  profileFailed(errorMessage) {
    console.log("PRofile failed", errorMessage);
    return errorMessage;
  }

  updateProfilePhoto(guide_id, photo_form) {
    return (dispatch) => {
      dispatch();
      this.source.ProfileSource.update_photo(guide_id, photo_form)
        .then((guide) => {
          this.getProfile();
        })
        .catch((errorMessage) => {
          this.profileFailed(errorMessage);
        });
    };
  }
}
export default alt.createActions(ProfileActions);
