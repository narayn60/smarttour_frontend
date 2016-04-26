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
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwMjlhYmQ4ZDM1MDAzYjFiNDlmNTZhYmZiNTc3ZmNiNWQ1NGMxNjcifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiUUFGN2h0VTBydTN4WkE1RUMzLTlqUSIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjE2Nzk1MjgsImV4cCI6MTQ2MTY4MzEyOCwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.PgwWJ0mQUgxdmNl4LbAwg9sGC9_yLaV0dkf9pcqfXao0SbRUUTj1pICZ3jZh-Pv5v6wqdlbpxsz-jIvUCb2tqJ_KOnyHSgqo6bdiwON3eHK_zECdaBVnMXACK6AxM-uAASRdCn6rmH3kQq-mtPp1J782legW-B-w4KMtp1MO8vPoM0JXELd5H0nlfqC8Nq4s-hw1JcIWCAaJtqI6Ifm2jovoYXRg4rXuAQfc1-i8nSZ-dxFUOijrouOlkXdcN-MPbz-Og_6w29GXya2uIVmx61FzrZ6JFX-ypxNr9_3qbbrL6I-wpnglUpFMDYUgAdpl_e9jZdDMGPhGObd6X7LMPg',
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
