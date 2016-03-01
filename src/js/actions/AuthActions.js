import alt from '../alt';
// import AuthSource from 'AuthSource';

class AuthActions {
  constructor() {
    // this.stores = {
    //   AuthSource: new AuthSource()
    // };
    // this.state = {
    //   authenticated: false
    // };
    this.generateActions('login');
  }

}

export default alt.createActions(AuthActions);
