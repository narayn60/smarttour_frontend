import alt from '../alt';
// import AuthSource from 'AuthSource';

class AuthActions {
  constructor() {
    this.generateActions('login');
  }

}

export default alt.createActions(AuthActions);
