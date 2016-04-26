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
    //   id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwMjlhYmQ4ZDM1MDAzYjFiNDlmNTZhYmZiNTc3ZmNiNWQ1NGMxNjcifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiYTA1QjI3VWUtd1BFZVZLSVJ1amo5ZyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjE2ODUzNzEsImV4cCI6MTQ2MTY4ODk3MSwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.fWHGrp3iDHn9KNmQGFdzaMgBZU1mWM3sCr1ifG6Nbvl7LlcuH-CZcW4TjGj9SYHNufERaS_-36rAsVRgPbl8qZ2rvetybYI3rWtm1SbzuYXeE5ywy0bh-VL3rl1q_7PuHd-CC2reQP9xTknvIGDe7o2QLOD3Jj7CQU8p2wKRvQJ3w6H8UG4VBgf2yE6lXfx2fDS4HunogSlrU-bnjK9cwAw3EvJondX88gkou3LE1x_rrCndwXOMRklNV9nlXOvpnAqOB4-WQEPHhW344GPaJfWz8x0vzL0VMM-SXG4BY-V93n7pt4eDmQ2kdrHbvpR2Fwj-Jef85amu7ODwElSP-A',
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
