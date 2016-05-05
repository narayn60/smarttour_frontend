import alt from 'alt_base';
import AuthActions from 'AuthActions';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);

    // this.user= {
    //   id: null,
    //   id_token: null,
    //   refresh_token: null,
    //   token: null,
    //   name: null,
    //   logo: null,
    //   provider: null,
    //   email: null
    // };

    this.user= {
      id: 1,
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM3ZWI0MGQzM2E0NjAyYTkxYmYzZjU2YzE4Y2ZhNDQwMTlmMmMzZWQifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiYXM3OXA1N2RDU2U5eWNhUkZpZVZvQSIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjI0NzQ0MDEsImV4cCI6MTQ2MjQ3ODAwMSwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.tB4I1oSnMgJkXZO6I43OwOixGVBNuugNy6UUE__bDpc2k5nFcfo-RQYMzrt2Kuqa2JFsca-WMCIywzzfdAxqqEaoyRctuUM6ai3zdb3ATeEV6KmVIcValieznZrI_dq6oV6R1amdbBn63L49a6cpy_Ex9Fx1ZTqdWJP9VyrBESi65ZFVzUwo9JEHRegpPgNXXAr9yGasOqVWzfhr4TXCtktdvi4ri_l0fQZGvi_IzZT_JulIWs28dc4LLtG8_EynQ6zO4BocNERUOrLpfbgb4iCRnisGM2ubVFcZ1LvrWkr9HZsRIPe2DMAEOol9sRiE8Cn1weB_GmRPgUl9oW61SQ',
      refresh_token: null,
      token: 1,
      name: 'Test',
      logo: null,
      provider: 'google',
      email: 'jaffnalab@gmail.com'
    };

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
