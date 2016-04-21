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
    id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3YWYyYTZiOWMwZmQxNjM1MThiYzdlOTI4NTZkNDZlNGRlZWNhN2QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoieUFQUU1MS1QtODdVMUd4Z0oxY3E1dyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjEyNDE4MTIsImV4cCI6MTQ2MTI0NTQxMiwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.fFs9cihi8826YWlwv5fX1E9pMbkOa2ZDa5k6Wfsgz19Y-cxbp4SmQtmzofq9CpzvHDqKOOWofyV0pvG3H8zJsu8wDxzlf7i4g9JL0aWZCNeje21QLZ7DP-Qbu2dRarTj6vlUBH8o7oCBzizPdIbr43o24P5YOOv904yRjRPosdYpqPtZ8XbOs60UoyEssIpAesHkTwVvEl4dcwJ6nWXoyoMQ2gcn5lnspVnPZwnsw0v20sVuU1eCUNtVHlNglrUWOFPnBvXdz4sO5YiWjuWsJwUtonX7aMX-stQNsOMD-uPCUYRIWzSxf8eVpCvd5ljGTxeLLQUg4Qf18fZx3_A4Ow',
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
