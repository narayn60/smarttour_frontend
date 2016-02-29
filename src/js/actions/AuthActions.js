import alt from '../alt';
import AuthSource from '../sources/AuthSource';

class AuthActions {
  constructor() {
    this.state = {};
    this.stores = {
      AuthSource: new AuthSource()
    };
    this.generateActions('login', 'logout');
  }

}

export default alt.createActions(AuthActions);
