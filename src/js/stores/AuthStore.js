import alt from '../alt';
import AuthActions from '../actions/AuthActions';

class AuthStore {
  consructor() {
    this.bindActions(AuthActions);
  }

  loggedIn() {
    // helper
    return false;
  }
}

export default alt.createStore(AuthStore, 'AuthStore');
