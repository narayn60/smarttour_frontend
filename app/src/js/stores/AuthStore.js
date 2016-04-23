import alt from 'alt_base';
import AuthActions from 'AuthActions';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);

    this.user= {
      id: null,
      id_token: null,
      refresh_token: null,
      token: null,
      name: null,
      logo: null,
      provider: null,
      email: null
    };

    // this.user= {
    //   id: 1,
    // id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFiYzZhY2ZhNjFhZGIyMDhjYTk1MjRhNzdlMGNiMTM0OTFkZWM4NDMifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiYW9VS3FucHpDTDhVWnZLSzA2T3hYZyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjEzNDU5MjQsImV4cCI6MTQ2MTM0OTUyNCwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.TzmHRk18C-wpKV-6BjN8-eeRQkIrvc4G477G6HDIhsNpGEqqjdP8fpx-Q9YjSaHjJ709Qk1esi0RgHroVlcjoNSZmy2AXhD0t3MgbOxrIFaAS4R9etAwRJRkTNFanx-m4-tDUJzwxRlqCB5GuRM8HQ9xd76qt3lltocTs7dCxsE6m9NRQE-2HlYcow2aPiguEdNKRKdnKamiF1EeJo_n6VopiMV0tAOuBGbRged-xBUU4CmKP4YUjnB-v0-wO2dJpWLyZbnmdkjTQH59tPPk8gnai-2qrvTHuntSNDqGK-cwX3Na8e9ifXL-QwcN5Pun3SGp1-uWGnYIl7l92TdaVA',
    //   token: 1,
    //   name: 'Test',
    //   logo: null,
    //   provider: 'google',
    //   email: 'jaffnalab@gmail.com'
    // };

    this.exportPublicMethods({
      isLoggedIn: this.isLoggedIn,
      getUser: this.getUser,
      getUid: this.getUid,
      getName: this.getName,
      getEmail: this.getEmail
    });
  }

  onLogin(info) {
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
    return st.id_token;
  }

  getName() {
    const st = this.getState().user;
    return st.name;
  }

  getEmail() {
    const st = this.getState().user;
    return st.email;
  }
}

export default alt.createStore(AuthStore, 'AuthStore');
