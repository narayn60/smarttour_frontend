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
    //   id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1OTY4MDBmODBiMjUzZmNkN2ZhNmViNTBjMGRkNjBhMzJjYjI5ZWMifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoieTNKVVI5c09oSHkwcVZuYThtWGNHZyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjMzMTE1NzAsImV4cCI6MTQ2MzMxNTE3MCwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.zieKMDaZ693afUHzMNf0A49PaOaEcmf9enm6MBU1UV3AxIMZl8EoWKn-egfe8EisqF99y4Y4WYDXGjjrKB-2fJ4zKdnyfGn_DWLSysARvJ9F5xmtBy_tkvp5srnHQuo9GehOk4BvURBf2tNRWVFWgyhp-2K0TvrxFBs-MdYP98gfzZSVhVsulB10ClwIL4sxbv_wLyqRxspp-u1etQe5iUYExckgwuiPGqCYhciUwd97OKJmDajfYiibDD36CpIPw4teBgBCGV6I-LmJlMkN-K2YJoYvBSJcZbr2KaCgIj9_ZFZ-YXG6lStUhbexxU1dVPgkuwebXcJ2zUF-4w3xOA',
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
