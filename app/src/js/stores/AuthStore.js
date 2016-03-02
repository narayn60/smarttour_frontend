import alt from '../alt';
import AuthActions from 'AuthActions';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);

    this.user= {
      id: null,
      token: null,
      name: null,
      logo: null,
      provider: null
    };

    this.exportPublicMethods({
      isLoggedIn: this.isLoggedIn,
      getUser: this.getUser,
      getUid: this.getUid,
      getName: this.getName
    });
  }

  onLogin(info) {
    console.log("Hello from authactions");
    console.log(info);
    this.user = info;
  }

  onLogout() {
    this.user.id = null; 
  }

  // static
  isLoggedIn() {
    const uid = this.getState().user.id;
    return (uid !== null);
  }

  getUser() {
    return this.getState().user;
  }

  getUid() {
    const st = this.getState().user;
    return st.id;
  }

  getName() {
    const st = this.getState().user;
    return st.name;
  }
}

export default alt.createStore(AuthStore, 'AuthStore');
