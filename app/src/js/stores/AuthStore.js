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
    //   id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjZhZjhkM2U0ZThkYzhkNWY4MjhmNzI0NjY0OWJkZmNiZTI0NTZiNGIifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiYWtYY2VXVGFJd2FILW1TeGVldmFDZyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjE5MzkwODUsImV4cCI6MTQ2MTk0MjY4NSwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.Q6UKdLowh26rBo0-Nhgz9De_2sw1zVQTsB0aE_rQ64QQaNU-Oq2ca3MSLxu6wUgGVhd1ef-Wq8CZMQEBrXXAcLsXQYQ5MWqmObNdiB_GhmCOpSuMIoABBEwkDOpDwfTAy7a2DqSfiB7vV34m66MfSioKt4EKoYiJ6jBUyybfncQB4VimCNkmoc7PTe-QxBUR1x2HJysbzlP7jD0aQhwHgb4Gupgamt4HWE5cl8U7cIx95uO4-9GmMypQAlu2Jn48t0PRTeQZuznDrIOZNULWqfGEKd1kC_LCywjOrCD2Py2MEEhEJ2ppi4CBV_TYrDi6wh4IlwfIvGSDfhunqoy2Lw',
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
