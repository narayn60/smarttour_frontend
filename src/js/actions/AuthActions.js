import alt from '../alt';
import AuthSource from '../sources/AuthSource';

class AuthActions {
  constructor() {
    this.stores = {
      AuthSource: new AuthSource()
    };
    this.state = {
      authenticated: false
    };
    this.generateActions('login', 'logout');
  }

}

export default alt.createActions(AuthActions);
