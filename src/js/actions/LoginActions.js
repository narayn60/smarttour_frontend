import alt from '../alt';
import LoginSource from '../sources/LoginSource';

class LoginActions {
  constructor() {
    this.state = {};
    this.stores = {
      LoginSource: new LoginSource()
    };
  }
}

export default alt.createActions(LoginActions);
