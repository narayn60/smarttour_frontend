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
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjhlYjlhZDZjODc5MWRkMDhkNDcxNmZmNjA2ZjFhNmE1YTA3NDFkOTYifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhdF9oYXNoIjoiRVdjbl9KVkc2NGV4SWRoSDJaTWQ0ZyIsImF1ZCI6Ijk4MTU2NzMyMzU5Ni1sNHNwaTMyM2J1ajl0MTl2dDh2ZmZtdWRnaWluZDdoai5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwNDAxMzEzNTk2MDQ5ODgwNDgxNiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhenAiOiI5ODE1NjczMjM1OTYtbDRzcGkzMjNidWo5dDE5dnQ4dmZmbXVkZ2lpbmQ3aGouYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJlbWFpbCI6ImphZmZuYWxhYkBnbWFpbC5jb20iLCJpYXQiOjE0NjE4Njc1OTEsImV4cCI6MTQ2MTg3MTE5MSwibmFtZSI6IkphZmZuYSBUZWFtIiwiZ2l2ZW5fbmFtZSI6IkphZmZuYSIsImZhbWlseV9uYW1lIjoiVGVhbSIsImxvY2FsZSI6ImVuIn0.KFhh7SK4aFNfg1oW1BE7RoOKwmr3MacvnyIgyrFW_d5laGJH4PAlS6XAHYb5WZPbGHagku5hzaqEpXBoGL8OwpSmP9liOgNzyqW80CmMSmWt31mEAofwjfm-WqUl3w6OY88vIrcbfBrKrA0mAC1avLa9KB0HMoh3e-69g_d7vkHe1GmP44aVrxBxhXUT23AAFwSifTrDdzHZX8vjNRyQIDKXTzy0ZND8lIZ_K7pGipKrlkvbi2dnJptcRfeV2uAvDIF5QDLhqDFUwZ8_GrONTVEGxN-AaCOxnRd-Tvf4zLy8scHlulBRSTRcfHIVOQL49z9tzgFs8cuZV2D4cz8_0w',
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
