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
    //   id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImFjM2RmYjM3ZDhhODA5NTI0Mzk3Yjk1M2I1NGU1ODZhMzY3NDU2NzcifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiZl9qYmZLeExQWDE4ckZVakJMN2dnZyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjIzMDI5NDksImV4cCI6MTQ2MjMwNjU0OSwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.e19MfhekPTDcQ95Z2fexXTMlph6HXiFRpgPhfOen3wYkhiAXRl6KNY-JGoTFydbbh_-1Mdk7pEtaAafXjMk1nrxs2xZhffRdaNdWyccv0u_P23Irrf27FBdlZt7I1m4x3N3tt6Wb_10N4QyYHYW9C1iqVUvPlGxkbgXv7D1iCep1YlPpn8BHjeGcDgSeE6r2hLkLHTogRK6TjSu6nFcrGJpNTLj0DB-enTMOgfyVMgO5nbSr-7gyx740rbP4cJugwAW4gYbjkuL-SxHcx4i2SEO02Sv2pGTNjnW5eBBR4XfhI8gLWUcB6Uj6meh7-o3I9Rpj699X1na9XEOzSmm-MQ',
    //   refresh_token: null,
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
      getEmail: this.getEmail,
      getId: this.getId,
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

  getId() {
    const st = this.getState().user;
    return st.id;
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
