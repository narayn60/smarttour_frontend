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
    //   id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlODBmZDMyNDFmNTc5Nzk4MzUyMmZlMzU3MWViNjU0YzE1YWJkYzMifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoibE4xVmxKVUt3cUNBYUFGd1dXTHg2USIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjMyMzYxNjEsImV4cCI6MTQ2MzIzOTc2MSwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.sqPUTCFeLGjIOpSJ8M3Vu9IDu1k8-l81oMnWobWyfObGIWydNyuQFU17pSJyqjABc2Lk40fGQXifauxsm-XjM5tM105QiBymXSHoSt3SiIZmWKvxVdEfcMZEmrs1ko3XM9jlJZgOoZI-ihkU-4HQ0RI2G6vX1uc4WnVFpgZ8UOhq3QB_9Svk2hXMrMZ9rjOefT3OevXDmdB2s8dzF0enaF1ugadS5LDrZZjjHsKSFa4iSeUuxsYpGvN10JnUt7C9tRSofxQtFQgWC0rcWN3d1dbLWkaKlohbCvTJEmYAT-4373bi1Kh47ESHa2kUN0vu7EI_mZNdo3FgWQsU-kFDDQ',
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
