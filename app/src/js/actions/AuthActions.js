import alt from 'alt_base';

class AuthActions {
  constructor() {
    this.generateActions('login');
  }

}

export default alt.createActions(AuthActions);
