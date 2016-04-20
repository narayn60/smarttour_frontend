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
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjcyM2MyNjc3NjhlN2NlMTIxYjc0ZTZmNWExMTU5YzhlZGUyODA3ODcifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoid1kxSDRVdk8tWlRSSzhodzdqbTNwZyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNTYzMjM4NDA5MjY5OTg3ODAxMyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6Im5hcmF5bjYwQGdtYWlsLmNvbSIsImlhdCI6MTQ2MTE3ODA4NSwiZXhwIjoxNDYxMTgxNjg1LCJuYW1lIjoiQW5kcmV3IFN0dWFydCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLWtacTd6NTRLWDcwL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUZrL09FeUFkWi1lMTRFL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJBbmRyZXciLCJmYW1pbHlfbmFtZSI6IlN0dWFydCIsImxvY2FsZSI6ImVuLUdCIn0.ShrLZ6e47d9m6fxZYLpbL1r1sTB2mmyWF8TB8DgA3gUCrbg-M333kFrL2Zo7c9_eEyuxbio4xu6dyQWY_dKX9c3Eb1sozUDVqKlHEjMhj7cvPJyZnwNPfRIhMEVbKl1HZ90VS7Hcgr6IIayB9ZAOQIkVjIcSCnJBLFMxiybVpJjx9ueleingmg8evsRJ2wYfWVQzzhopnDLi65UjRTIH1Lj6H718zqESmk1JOZe7i9_1_mEO0xpjBMWlG-BLZ8bagTAkTtUq54JUiOi6hG-F6kPCtPw3S6vQRlPsKlvrTamUS4dNit7plRFoyFphCWAZzfyF_hauScZc-pOXiRRJ8Q',
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
