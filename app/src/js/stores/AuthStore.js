import alt from 'alt_base';
import AuthActions from 'AuthActions';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);

    this.user= {
      id: null,
      id_token: null,
      token: null,
      name: null,
      logo: null,
      provider: null,
      email: null
    };

    // this.user= {
    //   id: 1,
    //   id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyM2MyNjc3NjhlN2NlMTIxYjc0ZTZmNWExMTU5YzhlZGUyODA3ODcifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoicndkNUR3ckx4ODBSX3p5elhsZHBEZyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjExNTY1MDQsImV4cCI6MTQ2MTE2MDEwNCwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.nK6zNNn6Rl_VlqAZJVwEkYtm-LFpLO50mNMIEUo-GjJ1MWS_bIHwEfc3bkVi-7uf-_A3KzUMm9fmpm11rmiBtEOzMiIshxH9ntwbh24poGYzjSJQi0rLNop1k5X_nZa5IiyEBUCFYonEJmWVOn2MQBZrPskjhFvl2AUjqukVFEs8CQgfjwhxBVo6wmtinCfNMUNWorqtNkKg6aLBLlpwjeARyaa3ube4jGCzHYIXI6-Uls2O8xqZ5Qgl4Jkrb1ieKbSZmpg784LTnIPt_EEffzJf8l126arfIlwVKxwSDPngP5n7-4_KHQdu8flkzlqpZXa4JDOzUs9iHFpgKNu7XQ',
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
