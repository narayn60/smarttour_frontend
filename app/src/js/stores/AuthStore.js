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
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc1MWZhYjVjZGE1NmMzYzdlNjc1NTRmMDI1NmZiMTJiZGQ1OTI5MzAifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiS3cwMUs2VnpKZ0hWT1FkWkNGX3FmdyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjE1MzY3MjksImV4cCI6MTQ2MTU0MDMyOSwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.WsBsLX-2TdLlc0wZoDlb8MiJRLxdWn5EJCjyJSB0tzToXytWUHAoOIVnUXnUPNj9Dbdcik-TdsPgOPFg3vuO4NoSly1OrxzHwOX9OmMaDhdRNVJsaiCA_jIlMiAiuqDHCQBVoE4ZZGuPqNdR3Ol7wEo3Xgeqx0iR-ljEA1s5TfOS6uFks6hnbOGffkMWh8da2FSJ74mc72ysPsSiZXuwfZ0SHFxh3q2mgJmymBIeTK-O5TrIGJph3L8KFZ26Q-QyF8fu1f5ubtI_43A6UONg-LottyS4C3FyHhNXqAat4dZAnw8oYUE9wwSUx53J3Yi-RjFhGrg1gBhBRqzY_ppLrA',
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
