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
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwMjlhYmQ4ZDM1MDAzYjFiNDlmNTZhYmZiNTc3ZmNiNWQ1NGMxNjcifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiOFdGakpDclBzRGV0THZyMU55bWVsQSIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjE2NzYzOTQsImV4cCI6MTQ2MTY3OTk5NCwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.HHmtw2kmmzMVV_O1gIW_Xc_nmKa1oCuaYCdgX5U-YfcV-UipwaQ0sJSxcXVFDd93y8Ip-RGy1OSonatUOAWPytH3dUHum901MTUDo7_srfbiBmW2K7NNNoU4hAJQUhsKIQ6cJMnsN8K37YJahyMMf91lX6HLKl01JA1g928CfMJW54I1rh_d1W-J7nqONtfR4CPKcUPm_cbbCGd4fL46MUzrCZ1xiJwPUJsmFBaEym2ChXfqeH39vi7mWLN4TCtdyWMTTarSoSe-xP1CnsUjr4PJ2NOnENheIJhbBUgNAuPBpYuI_LkAgPVg1TS5tJFObylx5eGa8lgLdmcS0we6pw',
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
