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
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwMjlhYmQ4ZDM1MDAzYjFiNDlmNTZhYmZiNTc3ZmNiNWQ1NGMxNjcifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoib3NIdndqYmU3SkZDeUxIUnVMcDhNZyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjE2ODIxNzQsImV4cCI6MTQ2MTY4NTc3NCwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.D16UHS00GXe41b3rSZrzigERswXs_hNrchNgRy66B_RH8DtcAFjDi_xj3onh8DjcsdH6YxO20uZvlls3K1jlSE-AxiAXBvA-ti7hDMIH5RMkCt6eQEcZqOk4qXgYy9kLou1jqnSD4D7n7zbIho8fdtWjDL78oOmY8PXUEWdEurYpiJue30sFICId7MubpLTXMs0aimmoAhcc5hNLZbeOnl7YIRISXW0EZ1fHZcy65J5jdM6nrZbJvKwe2g6Jtt6GZCDuOA1q6F4Nn9fjAv7G5rbUnXeDC6pslE6VUiOfc-rWSrFUJ1_23dK4bPZ6IS4CvVjFyfYB1AL5Xw8gFZkffw',
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
