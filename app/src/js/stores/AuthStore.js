import alt from 'alt_base';
import AuthActions from 'AuthActions';

class AuthStore {
  constructor() {
    this.bindActions(AuthActions);

    // this.user= {
    //   id: null,
    //   id_token: null,
    //   token: null,
    //   name: null,
    //   logo: null,
    //   provider: null,
    //   email: null
    // };

    this.user= {
      id: 1,
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3YWYyYTZiOWMwZmQxNjM1MThiYzdlOTI4NTZkNDZlNGRlZWNhN2QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoidm1KSFFFUFctYzdpTFBndERSbDVYZyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni12MnJ1NjBqMmM3OTFhbXRjcHZxc2NlbDJlcDc5cGw5Mi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtdjJydTYwajJjNzkxYW10Y3B2cXNjZWwyZXA3OXBsOTIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjEyMzA1NjMsImV4cCI6MTQ2MTIzNDE2M30.nK-GytIlWB57BWLzJrXvb1fNgTn8Puaj_S__xWUWDQa_9LgI9jhNsawlqceaTSnNLB8yxoLYUjIbVXRJRBLSs-t8MQ4_PMaSbWItHH7bsTv-EvnGLlAMaLiVXIRI5F5HA6RCrq9kbCpaQGHNQRdbhFR0njCFNwDCuYCI3QVA9gT3SEo3uqzxc-2DVi2B4SMhhyzM4ZbIYEqkYxVYeWpfHCu04zP8lowUjczKFYeVcgweqBAxPcd_-YsRxvPkSN7y_B0SPUpsk0OfHkGb1JL0ypZydqtGgjS8bwjWEmratA3hcm4y8sNl-5QHVpxMwHG_B_o9gvzuRdpmSrUjZmDYqQ',
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
