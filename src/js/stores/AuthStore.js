import alt from '../alt';
import AuthActions from '../actions/AuthActions';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);
    this.state = {
      authenticated: true
    };
  }
}

export default alt.createStore(AuthStore, 'AuthStore');
